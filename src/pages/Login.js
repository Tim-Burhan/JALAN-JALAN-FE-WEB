/* eslint-disable react-hooks/exhaustive-deps */

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
            history.push("/");
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
              <AuthTitle title="Login" />
              <FormAuth onSubmit={onLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <GeneralButton value="Sign In" isPrimary type="submit" />
              </FormAuth>
              <PAuth>Did you forgot your password?</PAuth>
              <PAuth>
                <Link to="/forgotPass">Tap here for reset</Link>
              </PAuth>
              <Hr />
              <PAuth>don't have an account yet?</PAuth>
              <PAuth>
                <Link to="/register">Click here to Sign Up</Link>
              </PAuth>
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
