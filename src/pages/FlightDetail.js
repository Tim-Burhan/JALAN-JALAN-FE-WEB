import React, { useState, useEffect } from "react";
import GeneralButton from "../components/GeneralButton";
import styled from "styled-components";

import { Alert, Col, Container, Image, Row } from "react-bootstrap";

import {
  MainColor,
  MainFontColor,
  SecondaryColor,
} from "../components/GeneralValues";

import {
  Button as ButtonStyled,
  Card as CardStyled,
  Input,
  Section,
  SectionJustify,
  TextCity,
  TextDetail,
  TextLabel,
  TopSectionStyles as TopSection,
} from "../components/GeneralStyled";

import { FaPlaneDeparture } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { MdWarning } from "react-icons/md";

import garudaIndonesia from "../assets/img/airPlane/garudaIndonesia.png";
import { connect } from "react-redux";
import { getDetails } from "../redux/actions/product";
import { useParams } from "react-router-dom";
import { createTransaction } from "../redux/actions/transaction";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

const H6 = styled.h6`
  margin: 0;
  padding: 0;
`;

const Light = styled.span`
  color: #0ddb89;
`;

const SectionPessanger = styled(Section)`
  height: 35px;
  width: 35px;
  background-color: ${SecondaryColor};
  margin-right: 5px;
`;

const ButtonCustom = styled(ButtonStyled)`
  background-color: grey;
  padding: 5px 10px;
  border-radius: 5px;
  height: 40px;
  margin-right: 5px;
`;

const TextFacilities = styled(TextLabel)`
  color: #fff;
`;

function FlightDetail(props) {
  const { id } = useParams();
  const { REACT_APP_BACKEND_URL: URL } = process.env;
  const { details } = props.product;
  const { token } = props.auth;
  let history = useHistory();

  // window.alert(id);
  useEffect(() => {
    props.getDetails(id);
  }, []);

  const onBooking = () => {
    props
      .createTransaction(id, token)
      .then(() => {
        if (
          props.transaction.sccMseg === "create transaction successfully!" &&
          props.transaction.errMseg === ""
        ) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Booking Failed",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            history.push("/mybooking");
          }, 1500);
        }
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${props.transaction.errMseg}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      <TopSection>
        <Container
          className="pt-5 d-flex flex-row justify-content-between"
          style={{ color: `${MainFontColor}` }}
        >
          <H6>Flight Details</H6>
          <H6>View Details</H6>
        </Container>
      </TopSection>
      <Container style={{ marginTop: -40 }}>
        <Row>
          <Col xs={12} sm={6} lg={8} className="d-none d-sm-block">
            <CardStyled className="shadow p-0 mb-5">
              <div className="px-3 py-4">
                <TextLabel className="input-label">Full Name</TextLabel>
                <Input
                  className="form-input"
                  type="text"
                  placeholder="Your name ..."
                />
                <TextLabel className="input-label">Email</TextLabel>
                <Input
                  className="form-input"
                  type="email"
                  placeholder="Your email ..."
                />
                <TextLabel className="input-label">Phone Number</TextLabel>
                <Input
                  className="form-input"
                  type="text"
                  placeholder="+62 ...."
                />
                <Alert variant="danger">
                  <MdWarning /> Make sure the customer data is correct.
                </Alert>
              </div>
            </CardStyled>

            <TextCity className="py-3">Passenger Details</TextCity>
            <CardStyled className="shadow mb-4">
              <div className="px-3 py-4">
                <TextLabel className="input-label">Title</TextLabel>
                <Input
                  className="form-input"
                  type="text"
                  placeholder="Mr/ Mrs"
                />
                <TextLabel className="input-label">Full Name</TextLabel>
                <Input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                />
                <TextLabel className="input-label">Nationality</TextLabel>
                <Input
                  className="form-input"
                  type="text"
                  placeholder="+62 ...."
                />
              </div>
            </CardStyled>

            <TextCity className="py-3">Passenger Details</TextCity>
            <CardStyled className="shadow mb-4">
              <div className="px-3 py-4 border-bottom">
                <SectionJustify>
                  <TextLabel>Travel Insurance</TextLabel>
                  <TextLabel className="input-label">
                    <Light>Rp 1.000.000</Light>/pax
                  </TextLabel>
                </SectionJustify>
              </div>
              <div className="px-3 py-4">
                <TextLabel>Get travel compensation up to $ 10.000,00</TextLabel>
              </div>
            </CardStyled>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <div style={{ maxWidth: 400 }}>
              <CardStyled className="shadow p-0" style={{ maxWidth: 400 }}>
                <div className="px-3 pt-4 pb-5 border-bottom">
                  <SectionJustify>
                    <div>
                      <TextCity>
                        {details.destination.base_country_code}
                      </TextCity>
                      <TextDetail>{details.time_leave}</TextDetail>
                    </div>
                    <FaPlaneDeparture className="mx-5" />
                    <div>
                      <TextCity>
                        {details.destination.destination_country_code}
                      </TextCity>
                      <TextDetail>{details.time_arrive}</TextDetail>
                    </div>
                  </SectionJustify>
                  <SectionJustify className="my-3">
                    <Image
                      src={
                        details.airline.picture !== null &&
                        !details.airline.picture.startsWith("http")
                          ? (details.airline.picture = `${URL}${details.airline.picture}`)
                          : garudaIndonesia
                      }
                      style={{ maxWidth: 50 }}
                    />
                    <div className="d-flex flex-column align-items-end">
                      <Section>
                        <BsFillStarFill color="#FF7F23" />
                        <BsFillStarFill color="#FF7F23" />
                        <BsFillStarFill color="#FF7F23" />
                        <BsFillStarFill color="#FF7F23" />
                        <BsFillStarFill color="#FF7F23" />
                      </Section>
                      <TextDetail>120k review</TextDetail>
                    </div>
                  </SectionJustify>
                  <SectionJustify>
                    <div>
                      <TextDetail>Code</TextDetail>
                      <TextLabel>{details.code}</TextLabel>
                    </div>
                    <div>
                      <TextDetail>Class</TextDetail>
                      <TextLabel>{details.class.name}</TextLabel>
                    </div>
                    <div>
                      <TextDetail>Terminal</TextDetail>
                      <TextLabel>{details.terminal}</TextLabel>
                    </div>
                    <div>
                      <TextDetail>Gate</TextDetail>
                      <TextLabel>{details.gate}</TextLabel>
                    </div>
                  </SectionJustify>
                </div>
                <SectionJustify className="mx-3 pt-4 pb-4">
                  <Section>
                    <SectionPessanger className="justify-content-center rounded-circle">
                      <TextLabel>2</TextLabel>
                    </SectionPessanger>
                    <TextDetail>Child</TextDetail>
                  </Section>
                  <Section>
                    <SectionPessanger className="justify-content-center rounded-circle">
                      <TextLabel>4</TextLabel>
                    </SectionPessanger>
                    <TextDetail>Adults</TextDetail>
                  </Section>
                </SectionJustify>
              </CardStyled>

              <div className="my-3">
                <TextLabel className="mb-2">Facilities</TextLabel>
                <Section>
                  <ButtonCustom style={{ backgroundColor: "#6DDA6B" }}>
                    <TextFacilities>Snack</TextFacilities>
                  </ButtonCustom>
                  <ButtonCustom style={{ backgroundColor: "#7861D7" }}>
                    <TextFacilities>Wifi</TextFacilities>
                  </ButtonCustom>
                  <ButtonCustom style={{ backgroundColor: "#E45D32" }}>
                    <TextFacilities>Restroom</TextFacilities>
                  </ButtonCustom>
                </Section>
              </div>

              <SectionJustify className="my-3">
                <TextDetail>Total you'll pay</TextDetail>
                <TextCity style={{ color: `${MainColor}` }}>
                  Rp.{details.price.toLocaleString("en")}
                </TextCity>
              </SectionJustify>
              <GeneralButton
                className="my-3"
                isPrimary
                value="BOOK FLIGHT"
                action={onBooking}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
  transaction: state.transaction,
});
const mapDispatchToProps = { getDetails, createTransaction };
export default connect(mapStateToProps, mapDispatchToProps)(FlightDetail);
