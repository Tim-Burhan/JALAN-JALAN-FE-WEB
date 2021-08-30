import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  Col,
  Modal,
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  TextCity,
  TextDetail,
  TextLabel,
  Section,
  SectionJustify,
} from "../components/GeneralStyled";
import { LinkStyle, NavHeader } from "../components/GeneralStyles";
import GeneralButton from "./GeneralButton";

import { connect } from "react-redux";
import { authLogOut } from "../redux/actions/auth";

import { FiMail } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi";
import { FaCamera, FaChevronLeft } from "react-icons/fa";

import { test } from "../dummy/chatDialog";
import { chats } from "../dummy/chatUsers";

const ButtonWrapper = styled.div`
  position: absolute;
  margin-top: -33px;
  margin-left: 360px;
  cursor: pointer;
  color: #898989;
  display: inline-block;
  & :hover {
    color: #0ddb89;
  }
`;

const ChatWrapper = styled.div`
  padding: 20px;
  height: 600px;
  backgound-color: green;
`;

const Dialog = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
`;

const YourDial = styled(Dialog)`
  background-color: LightGreen;
`;

const FriendDial = styled(Dialog)`
  background-color: silver;
`;

const DialogWrapper = styled.div`
  flex: 1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ImageWrapper = styled.div`
  width : 50;
  height : 50;
  border-radius : 10
  background-color : yellow
`;

function MainNavbar({ auth, authLogOut}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    handleCloseChat();
    setShow(true);
  };

  const [showChat, setShowChat] = useState(false);
  const handleCloseChat = () => setShowChat(false);
  const handleShowChat = () => {
    handleClose();
    setShowChat(true);
  };

  const [chatData, setChatData] = useState(test);
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const chat = chatData;

    chat.push({
      sender: 1,
      recipient: 2,
      message,
    });

    setMessage("");
    setChatData(chat);
  };

  



  return (
    <>
      <Navbar bg="white" expand="lg" className="position-fixed fixed-top">
        <Container>
          <Link style={LinkStyle} to="/">
            <Navbar.Brand style={NavHeader}>JalanJalan</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-lg-flex  flex-lg-row justify-content-lg-between pt-2 pt-lg-0 pl-5"
          >
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Where you want to go?"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="d-none" variant="outline-success">
                Search
              </Button>
            </Form>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{ marginRigth: 50 }}>
                <Link style={LinkStyle} to="/searchResult">
                  Find Ticket
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={LinkStyle} to="/myBooking">
                  My Booking
                </Link>
              </Nav.Link>
            </Nav>
            <Section>
              {auth.token !== null ? (
                <>
                  <div
                    variant="primary"
                    onClick={handleShow}
                    style={{ cursor: "pointer", marginRight: 16 }}
                  >
                    <FiMail color="#999" size={24} />
                  </div>
                  <Button onClick={authLogOut}>LogOut</Button>
                </>
              ) : (
                <Link to="/login">
                  <GeneralButton isPrimary value="Sign Up" />
                </Link>
              )}
            </Section>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <ChatWrapper>
          <TextDetail style={{ color: "#0ddb89" }}>CHAT</TextDetail>
          <SectionJustify>
            <TextCity>Chat</TextCity>
            <TextLabel style={{ color: "#0ddb89", cursor: "pointer" }}>
              Filter
            </TextLabel>
          </SectionJustify>
          <Modal.Body className="show-grid">
            <Container>
              {chats.map((v, idx) => {
                return (
                  <Row
                    className={
                      idx < chats.length - 1
                        ? "border-bottom py-2 my-2"
                        : "py-2 my-2"
                    }
                    onClick={handleShowChat}
                    style={{ cursor: "pointer" }}
                    key={idx}
                  >
                    <Col xs={2}>
                      <ImageWrapper>
                        <img src={v.picture} alt={v.name} />
                      </ImageWrapper>
                    </Col>
                    <Col xs={8}>
                      <TextCity>{v.name}</TextCity>
                      <TextDetail style={{ color: "#979797" }}>
                        {v.message}
                      </TextDetail>
                    </Col>
                    <Col xs={2}>
                      <TextDetail style={{ color: "#979797" }}>8:30</TextDetail>
                      <BiCheckDouble color="#979797" />
                    </Col>
                  </Row>
                );
              })}
            </Container>
          </Modal.Body>
        </ChatWrapper>
      </Modal>

      <Modal show={showChat} onHide={handleCloseChat}>
        <ChatWrapper>
          <Modal.Body className="show-grid">
            <Modal.Header>
              <Modal.Title>
                <Section onClick={handleShow} style={{ cursor: "pointer" }}>
                  <FaChevronLeft size={20} />
                  <TextCity style={{ fontSize: 20, marginLeft: 10 }}>
                    Andrew
                  </TextCity>
                </Section>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                height: 500,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <DialogWrapper>
                {chatData.map((v) => {
                  return (
                    <>
                      {v.sender === 1 ? (
                        <YourDial className="align-self-end">
                          {v.message}
                        </YourDial>
                      ) : (
                        <FriendDial className="align-self-start">
                          {v.message}
                        </FriendDial>
                      )}
                    </>
                  );
                })}
              </DialogWrapper>
              <Form onSubmit={sendMessage}>
                <InputGroup className="mb-3">
                  <div className="position-relative w-100">
                    <FormControl
                      placeholder="Your text ..."
                      aria-label="Your text ..."
                      aria-describedby="basic-addon2"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      style={{ paddingRight: 50 }}
                    />
                    <Button
                      type="submit"
                      variant="success"
                      id="button-addon2"
                      className="d-none"
                    />
                    <ButtonWrapper>
                      <FaCamera size={24} />
                    </ButtonWrapper>
                  </div>
                </InputGroup>
              </Form>
            </Modal.Body>
          </Modal.Body>
        </ChatWrapper>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  chats: state.auth,
});

const mapDispatchToProps = { authLogOut };

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
