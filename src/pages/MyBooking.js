import React, { Component } from 'react'
import Footer from '../components/Footer';
import styled from "styled-components"
import ProfileCard from '../components/ProfileCardBox';

const Heading = styled.div`
  height: 600px;
  display: flex;
  padding: 50px
`
const Parent = styled.div`
  background-color: #F5F6FA;
`
const MyBookingBox = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 250, 0.1);
  padding: 4px 10px 8px 10px;
  border-radius: 10px;
`
const RightBox = styled.div`
  width: 80%;
  height: 500px;
  margin-top: 30px;
  padding-left: 50px;
  display: flex;
`
export default class MyBooking extends Component {
  render() {
    return (
      <Parent>
        <Heading>
          <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent:"space-between"}}>
            <div>
            <ProfileCard />
            </div>
            <RightBox>
              <MyBookingBox>
                <div>
                  
                </div>
              </MyBookingBox>
            </RightBox>
          </div>
        </Heading>
        <div className="bg-white pt-2">
        <Footer/>
        </div>
      </Parent>
    )
  }
}
