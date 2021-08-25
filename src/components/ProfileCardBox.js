import React from 'react'
import image from "../assets/img/general/japanView.png"
import {CgProfile} from "react-icons/cg"
import {AiFillStar, AiFillSetting} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"
import styled from "styled-components"

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`
const ProfileCard = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 15px;
  background-color: white;
  margin-top: 30px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 250, 0.1);
  padding: 4px 10px 8px 10px;
`
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
const Profileimg = styled.img`
  width : 100px;
  height : 100px;
  border-radius: 75px;
` 
const SelectPict = styled.div`
  width : 100px;
  height : 30px;
  border-radius: 5px;
  border: 2px solid #0ddb89;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 6px
` 
const Picker = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -2;
`
const Text = styled.h1`
  font-size: 12px;
  color: #0ddb89;
  font-weight: bold;
  margin-top: 5px;
`
const Name = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`
const Place = styled.h2`
  font-size: 10px;
  color: grey;
  text-align: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Credite = styled.h2`
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`
const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px 8px;
`
const Text2 = styled.a`
  font-size: 12px;
  color: #0ddb89;
  font-weight: bold;
  text-decoration: none;
`
const CrediteCard =  styled.div`
  background: #0ddb89;
  width: 94%;
  padding: 5px 10px;
  height: 60px;
  margin-top: 5px;
  border-radius: 6px;
  box-shadow: 0px 7px 7px 7px rgba(13, 219, 137, 0.2);
` 

export default function ProfileCardBox() {
  return (
      <ProfileCard class="shadow p-3 mb-5 ">
              <ProfileContent>
                <Box>
                <Profileimg src={image} alt=""/>
                <Wrapper>
                  <label for="upload-photo" className="">
                    <SelectPict>
                      <Text>Select Photo</Text>
                    </SelectPict>
                  </label>
                  <Picker type="file" name="photo" id="upload-photo"/>
                  <Name>Mike Kowalski</Name>
                  <Place>Bandung,Indonesia</Place>
                </Wrapper>
                </Box>
              </ProfileContent>
              <Box>
                  <Box2>
                    <Credite>Card</Credite>
                    <Text2 href="">Add+</Text2>
                  </Box2>
                  <CrediteCard>
                    <div className="mb-1" style={{fontSize: 14, color: "white", width: "100%", textAlign: "start", marginLeft: 6,letterSpacing: 4,}}>12345678</div>
                    <Box2>
                      <Credite style={{color: "white",}}>Card</Credite>
                      <Credite style={{color: "white",}}>Rp.200.000</Credite>
                    </Box2>
                  </CrediteCard>
              </Box>
              <Box>
                <div style={{ width: "100%", height: 150, paddingTop: 20}}>
                    <div style={{display: 'flex', fontWeight: "bold", alignItems:"center", width: "100%", marginBottom: 10}}>
                      <div style={{width: 60,}}>
                      <CgProfile color="#0ddb89" size={20}/>
                      </div>
                      <div style={{width: 60,}}>
                        <div style={{fontSize: 14, textAlign: "start", marginLeft: 10,}}>Profile</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', fontWeight: "bold", alignItems:"center", width: "100%", marginBottom: 10}}>
                      <div style={{width: 60,}}>
                      <AiFillStar color="grey" size={20}/>
                      </div>
                      <div style={{width: 100,}}>
                        <div style={{fontSize: 14, textAlign: "start", marginLeft: 10,}}>My Review</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', fontWeight: "bold", alignItems:"center", width: "100%", marginBottom: 10}}>
                      <div style={{width: 60,}}>
                      <AiFillSetting color="grey" size={20}/>
                      </div>
                      <div style={{width: 60,}}>
                      <div style={{fontSize: 14, textAlign: "start", marginLeft: 10,}}>Settings</div>
                      </div>
                    </div>
                    <div style={{display: 'flex', fontWeight: "bold", alignItems:"center", width: "100%", marginBottom: 10}}>
                      <div style={{width: 60,}}>
                      <FiLogOut color="#F24545" size={20}/>
                      </div>
                      <div style={{width: 60,}}>
                        <div style={{fontSize: 14, textAlign: "start", marginLeft: 10,color: "#F24545",}}>LogOut</div>
                      </div>
                    </div>
                </div>
              </Box>
            </ProfileCard>
  )
}
