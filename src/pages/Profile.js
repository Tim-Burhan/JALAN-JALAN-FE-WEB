import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ProfileCard from "../components/ProfileCardBox";
import GeneralButton from "../components/GeneralButton";

import { getProfile } from "../redux/actions/profile";
import { editProfile } from "../redux/actions/profile";
import Swal from "sweetalert2";

import { Col, Row } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";

import {
  CardCst,
  Input,
  Section,
  TextCity,
  TextDetail,
  TextLabel,
} from "../components/GeneralStyled";

const Card = styled(CardCst)`
  width: 100%;
  heigth: auto;
  padding: 30px;
`;

const Heading = styled.div`
  height: 600px;
  display: flex;
  padding: 50px;
`;
const Parent = styled.div`
  background-color: #f5f6fa;
  min-height: 100vh;
`;

const RightBox = styled.div`
  width: 80%;
  height: 500px;
  margin-top: 30px;
  padding-left: 50px;
`;

const Label = styled(TextDetail)`
  color: #9b96ab;
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: 1,
          fullName: "Muhammad Rizky Ramadhan",
          image:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          city: "Purwokerto",
        },
      ],
      card: [
        {
          id: 1,
          id_user: 1,
          number: "2443 3445 2345 2311",
          name: "BCA",
          saldo: 300000,
        },
        {
          id: 2,
          id_user: 1,
          number: "1213 2333 2345 4576",
          name: "MANDIRI",
          saldo: 9000000,
        },
      ],
      username: "",
      email: "",
      phoneNumber: "",
      city: "",
      address: "",
      post_code: "",
      picture: "",
    };
  }

  componentDidMount() {
    const { token } = this.props.auth;
    console.log(token);
    this.props.getProfile(token).then( async()=>{
      if(this.props.profile.data?.user.picture !== null && !this.props.profile.data?.user.picture.startsWith('http')){
        this.props.profile.data.user.picture=`${URL}${this.props.profile.data.user.picture}`
      }
      await this.setState({username: this.props.profile?.data?.user?.username})
      await this.setState({email: this.props.profile?.data?.user?.email})
      await this.setState({city: this.props.profile?.data?.user?.city})
      await this.setState({phoneNumber: this.props.profile?.data?.user?.phoneNumber})
      await this.setState({address: this.props.profile?.data?.user?.address})
      await this.setState({post_code: this.props.profile?.data?.user?.post_code})
      return await this.setState({picture: this.props.profile?.data?.user?.picture})
    })
  }

  onUpdateProfile =(e) => {
    e.preventDefault()
    const {token} = this.props.auth
    const {username, picture, phoneNumber, address, post_code} = this.state
    this.props.editProfile({username, picture, phoneNumber, address, post_code}, token).then(()=> {
        if(this.props.profile.sccMsg === "User is Updated without req file Successfully" || this.props.profile.sccMsg === "User is Updated with req file Successfully"){
          return(
            Swal.fire({
              position: "center",
              icon: "success",
              title: "profile updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            })
          )
        }
    })
  }

  render() {
    // const { data } = this.props.user;
    // console.log(data);
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
              picture={this.state.picture}
              number={this.props.profile?.data?.number} 
              action={e=>this.setState({picture: e.target.value})}
              />
            </div>
            <RightBox>
              <Card className="shadow mb-3">
                <TextLabel style={{ color: "#0ddb89" }}>PROFILE</TextLabel>
                <TextCity style={{ fontSize: 24 }}>Profile</TextCity>
                <form style={{ marginTop: 30 }}>
                  <Row>
                    <Col>
                      <TextLabel className="mb-3">Contact</TextLabel>
                      <Label className="mb-2">Email</Label>
                      {console.log("ini email", this.state.email)}
                      <Input
                        className="mb-3"
                        type="email"
                        placeholder={this.state.email}
                        style={{color: "grey"}}
                        onChange={e=>this.setState({email: e.target.value})}
                      />
                      <Label className="mb-2">Phone Number</Label>
                      <Input
                        className="mb-3"
                        type="text"
                        placeholder={this.state.phoneNumber}
                        onChange={e=>this.setState({phoneNumber: e.target.value})}
                      />
                      <Section className="d-flex justify-content-end mb-3">
                        <TextLabel
                          style={{ marginRight: 10, color: "#0ddb89" }}
                        >
                          Account Setting
                        </TextLabel>
                        <FiChevronRight color="#0ddb89" />
                      </Section>
                    </Col>
                    <Col>
                      <TextLabel className="mb-3">Biodata</TextLabel>
                      <Label className="mb-2">Username</Label>
                      <Input
                        className="mb-3"
                        type="text"
                        placeholder={this.state.username}
                        onChange={e=>this.setState({username: e.target.value})}
                      />
                      <Label className="mb-2">City</Label>
                      <Input className="mb-3" type="text" placeholder={this.state.city}/>
                      <Label className="mb-2">Address</Label>
                      <Input
                        className="mb-3"
                        type="text"
                        placeholder={this.state.address}
                        onChange={e=>this.setState({address: e.target.value})}
                      />
                      <Label className="mb-2">Post Code</Label>
                      <Input
                        className="mb-3"
                        type="number"
                        placeholder={this.state.post_code}
                        onChange={e=>this.setState({post_code: e.target.value})}
                      />
                      <Section className="d-flex justify-content-end">
                        <GeneralButton isPrimary value="save" action={this.onUpdateProfile}/>
                      </Section>
                    </Col>
                  </Row>
                </form>
              </Card>
            </RightBox>
          </div>
        </Heading>
      </Parent>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = { getProfile, editProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
