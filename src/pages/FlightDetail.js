import React, { useState, useEffect } from "react";
import GeneralButton from "../components/GeneralButton";
import styled from "styled-components";

import { Container, Image, Row, Col } from "react-bootstrap";
import {
  TopSectionStyles as TopSection,
  Card as CardStyled,
  Section,
  Button as ButtonStyled,
} from "../components/GeneralStyled";
import {
  MainColor,
  MainFontColor,
  SecondaryColor,
} from "../components/GeneralValues";
import {
  SectionJustify,
  TextCity,
  TextDetail,
  TextLabel,
} from "../components/GeneralStyled";

import { FaPlaneDeparture } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
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
  const {details} = props.product
  const {token} = props.auth
  let history = useHistory()
  console.log('ini',id);
  useEffect(() => {
    props.getDetails(id);
  }, []);

  const onBooking = () => {
    props.createTransaction(id, token).then(()=>{
      if(props.transaction.sccMseg === "create transaction successfully!" && props.transaction.errMseg === ""){
        return (
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Booking Successfully',
            showConfirmButton: false,
            timer: 1500
          }, setTimeout(() => {
            history.push('/mybooking')
          }, 1500))
        )
      }
    })
  }

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
          <Col xs={12} md={6} lg={9} className="d-none d-md-block">
            sisi kiri
          </Col>
          <Col xs={12} md={6} lg={3}>
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
                          ? details.airline.picture = `${URL}${details.airline.picture}`
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
