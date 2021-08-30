import React, { Component } from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCardBox";

import { Col, Row } from "react-bootstrap";
import { FaPlaneDeparture } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { getHistoryProducts } from "../redux/actions/transaction";
import { getProfile } from "../redux/actions/profile";
import { connect } from "react-redux";

import {
  Button as ButtonStyled,
  CardCst,
  Section,
  SectionJustify,
  TextCity,
  TextDetail,
  TextLabel,
} from "../components/GeneralStyled";

const Button = styled(ButtonStyled)`
  padding: 5px 15px;
  border-radius: 15px;
  color: #fff;
`;

const Card = styled(CardCst)`
  width: 100%;
  heigth: auto;
  padding: 30px;
`;

const Heading = styled.div`
  min-height: 600px;
  display: flex;
  padding: 50px;
`;
const Parent = styled.div`
  background-color: #f5f6fa;
  min-height: 100vh;
`;

const RightBox = styled.div`
  width: 80%;
  min-height: 500px;
  margin-top: 30px;
  padding-left: 50px;
`;

const CardData = [
  {
    status: "Waiting for Payment",
    colorStatus: "#FF7F23",
  },
  {
    status: "Eticket issued",
    colorStatus: "#4FCF4D",
  },
];


class MyBooking extends Component {
  constructor(props) {
    super(props);
    this.state =  {data: {}};
  }
  componentDidMount(){
   const {token} = this.props.auth
   this.props.getProfile(token) 
   this.props.getHistoryProducts(token).then(()=> {
    const { REACT_APP_BACKEND_URL: URL } = process.env;
    if(this.props.profile.data?.user.picture !== null && !this.props.profile.data?.user.picture.startsWith('http')){
      return this.props.profile.data.user.picture=`${URL}${this.props.profile.data.user.picture}`
    }
   })
   
  }
  render() {
    return (
      <Parent>
        <Heading>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <ProfileCard 
              name={this.props.profile?.data?.user?.name} 
              city={this.props.profile?.data?.user?.city} 
              picture={this.props.profile?.data?.user?.picture}
              number={this.props.profile?.data?.number} 
              />
            </div>
            <RightBox>
              <Card className="shadow mb-3">
                <TextLabel style={{ color: "#0ddb89" }}>MY BOOKING</TextLabel>
                <SectionJustify>
                  <TextCity style={{ fontSize: 24 }}>My Booking</TextCity>
                  <TextLabel style={{ color: "#0ddb89" }}>
                    Order History
                  </TextLabel>
                </SectionJustify>
              </Card>

              {this.props.transaction?.history?.map((data) => (
                <Card className="shadow  mb-3" key={data.id}>
                  <Row className="border-bottom mb-3">
                    <Col>
                      <TextLabel className="mb-3">
                        {data.product.day}, {data.product.date}{data.product.month} {data.product.year} - {data.product.time_leave}
                      </TextLabel>
                      <Section className="mb-3">
                        <TextCity>{data.product.destination.base_country}</TextCity>
                        <FaPlaneDeparture className="mx-5" />
                        <TextCity>{data.product.destination.destination_country}</TextCity>
                      </Section>
                      <TextDetail style={{ color: "#979797" }} className="mb-3">
                      {data.product.airline.name}, {data.product.code}
                      </TextDetail>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <SectionJustify className="h-100">
                        <TextDetail style={{ color: "#7A7A7A" }}>
                          Status
                        </TextDetail>
                        {data.status === 0 ? 
                            <Button style={{ backgroundColor: `#FF7F23` }}>
                            <TextDetail style={{ color: "#fff" }}>
                              Waiting for payment
                            </TextDetail>
                          </Button>
                        :
                          <Button style={{ backgroundColor: `#4FCF4D` }}>
                          <TextDetail style={{ color: "#fff" }}>
                            Payment successfully
                          </TextDetail>
                        </Button>
                        }
                      </SectionJustify>
                    </Col>
                    <Col xs={8}>
                      <Section className="h-100 justify-content-end">
                        <TextLabel style={{ color: "#0ddb89" }}>
                          View Detail
                        </TextLabel>
                        <FiChevronDown color="#0ddb89" />
                      </Section>
                    </Col>
                  </Row>
                </Card>
              ))}
            </RightBox>
          </div>
        </Heading>
      </Parent>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  transaction: state.transaction,
  profile: state.profile,
});
const mapDispatchToProps = { getHistoryProducts, getProfile };
export default connect(mapStateToProps, mapDispatchToProps)(MyBooking)