import React, { useState, useEffect } from "react";

import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ContentWrapper,
  MaxWidth,
  FormAuth,
  PAuth,
  Hr,
} from "../components/AuthStyles";

import LeftSideAuth from "../components/LeftSideAuth";
import GeneralButton from "../components/GeneralButton";
import AuthTitle from "../components/AuthTitle";
import { authLogin } from "../redux/actions/auth";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import Swal from "sweetalert2";
import { toggleAuth, openNavbar } from "../redux/actions/auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = props.auth;
  let history = useHistory();

  useEffect(() => {
    props.toggleAuth();
    if (token !== null) {
      history.push("/searchResult");
    }
  }, []);

  const onLogin = (e) => {
    e.preventDefault();
    props
      .authLogin(email, password)
      .then(() => {
        if (token !== null) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            history.push("/searchResult");
          }, 1500);
        }
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <Container style={{ paddingTop: 60 }}>
      <Row>
        <LeftSideAuth />
        <Col xs={12} md={6} lg={4}>
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="New Password" />
              <FormAuth onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="pass"
                    placeholder="New Password"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Repeat New Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <GeneralButton value="Reset" isPrimary type="submit" />
              </FormAuth>
            </MaxWidth>
          </ContentWrapper>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { authLogin, toggleAuth, openNavbar };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
