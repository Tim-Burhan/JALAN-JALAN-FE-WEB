import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GeneralButton from "./GeneralButton";
import { LinkStyle } from "./GeneralStyles";
import {
  TextLabel,
  TextDetail,
  TextCity,
  CardCst,
} from "../components/GeneralStyled";

import garudaIndonesia from "../assets/img/airPlane/garudaIndonesia.png";

import { FaPlaneDeparture, FaHamburger, FaWifi } from "react-icons/fa";
import { RiSuitcase3Fill } from "react-icons/ri";

import { getAllProduct } from "../redux/actions/product";

function CardAirLine({ auth, product, getAllProduct }) {
  useEffect(() => {
    console.log(auth.token);
    // getAllProduct(auth.token);
    console.log(product.data);
  });

  return (
    <>
      {product.data.map((v) => {
        return (
          <Link to="/flightDetail" style={LinkStyle}>
            <CardCst className="px-md-3 pt-3 my-3" style={{ color: "#979797" }}>
              <Row>
                <Col className="mb-3">
                  {/* {product.data.map((data) => {
              return <div>{data}</div>;
            })} */}
                  <div class="d-flex align-items-center justify-content-center justify-content-md-start ">
                    <img
                      src={garudaIndonesia}
                      style={{ maxWidth: 80 }}
                      className="w-15"
                      alt="Pesawat"
                    />
                    <TextLabel>{v.airline.name}</TextLabel>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} lg={3} className="d-flex flex-column mb-3">
                  <div className="align-self-center align-self-lg-start d-flex flex-row align-items-center justify-content-center">
                    <div>
                      <TextCity>
                        {v.destination.destination_country_code}
                      </TextCity>
                      <TextDetail>{v.time_leave}</TextDetail>
                    </div>
                    <FaPlaneDeparture className="mx-5" />
                    <div>
                      <TextCity>
                        {v.destination.destination_country_code}
                      </TextCity>
                      <TextDetail>{v.time_arrive}</TextDetail>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="d-flex flex-column mb-3">
                  <div className="align-self-center ">
                    <TextCity>3 hour 11 minutes</TextCity>
                    <TextDetail>({v.transit} Transite)</TextDetail>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="d-flex flex-column mb-3">
                  <div className="align-self-center">
                    <RiSuitcase3Fill className="mx-2" />
                    <FaHamburger className="mx-2" />
                    <FaWifi className="mx-2" />
                  </div>
                </Col>
                <Col xs={12} sm={12} lg={3} className="d-flex flex-column mb-3">
                  <div className="align-self-center align-self-lg-end">
                    <GeneralButton isPrimary value="Select" />
                  </div>
                </Col>
              </Row>
            </CardCst>
          </Link>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
});

const mapDispatchToProps = {
  getAllProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardAirLine);
