/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Container, Form, Row, Col } from "react-bootstrap";
// import AuthHeader from "../components/AuthHeader";
import AuthTitle from "../components/AuthTitle";
import GeneralButton from "../components/GeneralButton";

import {
  ContentWrapper,
  MaxWidth,
  FormAuth,
  PAuth,
  Hr,
} from "../components/AuthStyles";
import { connect } from "react-redux";
import { authRegister } from "../redux/actions/auth";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { toggleAuth } from "../redux/actions/auth";
import LeftSideAuth from "../components/LeftSideAuth";

function Register(props) {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const { sccMsg } = props.auth;
  const { token } = props.auth;
  useEffect(() => {
    props.toggleAuth();
    if (token !== null) {
      history.push("/searchResult");
    }
  }, []);

  const onRegister = (e) => {
    e.preventDefault();
    props
      .authRegister(name, email, password)
      .then(() => {
        if (sccMsg === "register success!") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Register Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            history.push("/login");
          }, 1500);
        }
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Register Failed",
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
              <AuthTitle title="Register" />
              <FormAuth onSubmit={onRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPasword(e.target.value)}
                  />
                </Form.Group>
                <GeneralButton value="Sign Up" isPrimary type="submit" />
              </FormAuth>
              <Hr />
              <PAuth>Already have an Account?</PAuth>
              <Link to="/login">
                <GeneralButton value="Sign In" />
              </Link>
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
const mapDispatchToProps = { authRegister, toggleAuth };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
