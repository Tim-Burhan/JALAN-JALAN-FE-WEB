import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Footer from "../components/Footer";
// import MainNavbar from "../components/MainNavbar";
import TopDestinationList from "../components/TopDestinationList";
import {
  TextDetail,
  TextLabel,
  TextCity,
  CardCst,
  Section,
  SectionJustify,
  CardDestination,
} from "../components/GeneralStyled";

import styled from "styled-components";

import { AiOutlineReload } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import {} from "react-icons/fa";
import {
  FaChevronRight,
  FaChevronLeft,
  FaPlaneDeparture,
} from "react-icons/fa";

// import garudaIndonesia from "../assets/img/airPlane/garudaIndonesia.png";
import BgJumbotron from "../assets/img/general/bgJumbotron.jpg";
import japanView from "../assets/img/general/japanView.png";
import spainView from "../assets/img/general/spainView.png";
import { connect } from "react-redux";
import { openNavbar } from "../redux/actions/auth";

const BgTopDestination = styled(CardCst)`
  background-color: #0ddb89;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  height: 400px;
  border-radius: 50px;
`;

const ButtonDestination = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: none;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const Jumbotron = styled.section`
  padding-top: 100px;
  min-height: 100vh;
  background-image: url(${BgJumbotron});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  padding: 0;
`;

const SubTitle = styled(TextDetail)`
  color: #414141;
`;

const TitleDark = styled.span`
  color: #414141;
`;

const TitleLight = styled.span`
  color: #0ddb89;
`;

const CardCustom = styled(CardCst)`
  width: 100%;
  max-width: 300px;
`;

const CardJapan = styled(CardDestination)`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.7)
    ),
    url(${japanView});
`;

const CardSpain = styled(CardDestination)`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.7)
    ),
    url(${spainView});
`;

const InputSearch = styled(Button)`
  background-colot: grey;
`;



function Explore(props) {

  useEffect(() => {
    props.openNavbar()
  },[])
  return (
    <>
      <Jumbotron className="jumbotron">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Section className="d-flex flex-column mb-3">
                <div>
                  <Title>
                    <TitleDark>Find your</TitleDark>
                    <TitleLight> Flight</TitleLight>
                  </Title>
                  <SubTitle>and explore the world with us</SubTitle>
                </div>
              </Section>
            </Col>
            <Col xs={12} md={6}>
              <Section className="d-flex flex-column">
                <CardCustom className="shadow p-3">
                  <TextLabel>Hey,</TextLabel>
                  <TextCity className="pb-2">Where you want to go?</TextCity>
                  <TextLabel></TextLabel>
                  <Section className="justify-content-between pb-3">
                    <TextLabel>
                      <TitleLight>Recently Searched</TitleLight>
                    </TextLabel>
                    <FaChevronRight color="#0ddb89" />
                  </Section>
                  <CardCustom className="shadow p-3 mb-3">
                    <SectionJustify>
                      <TextDetail>From</TextDetail>
                      <TextDetail>To</TextDetail>
                    </SectionJustify>
                    <SectionJustify>
                      <TextCity>Medan</TextCity>
                      <BsArrowLeftRight color="#0ddb89" />
                      <TextCity>Tokyo</TextCity>
                    </SectionJustify>
                    <SectionJustify>
                      <TextDetail>Indonesia</TextDetail>
                      <TextDetail>Japan</TextDetail>
                    </SectionJustify>
                  </CardCustom>
                  <SectionJustify className="mb-3">
                    <Button
                      style={{ width: "49%", fontSize: 12 }}
                      variant="success"
                    >
                      <FaPlaneDeparture style={{ marginRight: 5 }} />
                      One way
                    </Button>
                    <Button
                      style={{ width: "49%", fontSize: 12 }}
                      variant="secondary"
                    >
                      <AiOutlineReload style={{ marginRight: 5 }} />
                      Round trip
                    </Button>
                  </SectionJustify>
                  <TextLabel className="mb-3">Departure</TextLabel>
                  <InputSearch>Monday, 20 July 2021</InputSearch>
                </CardCustom>
              </Section>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <div style={{ marginTop: 100, marginBottom: 100 }}>
          <SectionJustify>
            <Section className="flex-column align-items-start">
              <TextDetail className="mb-3">TRENDING</TextDetail>
              <TextCity className="mb-3">Trending destinations</TextCity>
            </Section>
            <TextLabel style={{ color: "#0ddb89" }}>View All</TextLabel>
          </SectionJustify>

          <Row>
            <Col>
              <CardJapan />
            </Col>
            <Col>
              <CardSpain />
            </Col>
            <Col>
              <CardJapan />
            </Col>
            <Col>
              <CardSpain />
            </Col>
            <Col>
              <CardJapan />
            </Col>
          </Row>
        </div>

        <BgTopDestination>
          <TextDetail>Top 10</TextDetail>
          <TextCity>Top 10 Destinations</TextCity>
          <TopDestinationList />
          <Section>
            <ButtonDestination>
              <FaChevronLeft color="#FFF" />
            </ButtonDestination>
            <ButtonDestination>
              <FaChevronRight color="#FFF" />
            </ButtonDestination>
          </Section>
        </BgTopDestination>
      </Container>
    </>
  );
}
const mapStateToProps = state => ({
  auth: state.auth
})
const mapDispatchToProps = {openNavbar}
export default connect(mapStateToProps, mapDispatchToProps)(Explore)