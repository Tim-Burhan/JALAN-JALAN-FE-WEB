import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";
import {
  ContentWrapper,
  FormAuth,
  MaxWidth,
  PAuth,
} from "../components/AuthStyles";
import AuthTitle from "../components/AuthTitle";
import LeftSideAuth from "../components/LeftSideAuth";

export default function ForgotPass() {
  return (
    <Container style={{ paddingTop: 60 }}>
      <Row>
        <LeftSideAuth />
        <Col xs={12} md={6} lg={4}>
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="Forgot Password" />
              <FormAuth>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>
                <GeneralButton value="Send" isPrimary />
              </FormAuth>
              <PAuth>You’ll get message soon on your email</PAuth>
            </MaxWidth>
          </ContentWrapper>
        </Col>
      </Row>
    </Container>
  );
}
