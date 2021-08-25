import React, {useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import GeneralButton from "../components/GeneralButton";
import {connect} from "react-redux";
import AuthHeader from "../components/AuthHeader";
import {
  ContentWrapper,
  FormAuth,
  MaxWidth,
  PAuth,
} from "../components/AuthStyles";
import AuthTitle from "../components/AuthTitle";
import { Link, useHistory } from "react-router-dom";
import { forgotPass } from '../redux/actions/auth';


function ForgotPass({forgotPass}) {
  let history = useHistory()
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    forgotPass(email)
    history.push('/login')
  }
  return (
    <Container>
      <Row>
        <Col>
          <ContentWrapper>
            <MaxWidth>
              <AuthTitle title="Forgot Password" />
              <FormAuth>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Username" value={email} onChange={(value) => setEmail(value.target.value)} />
                </Form.Group>
                <GeneralButton onClick={onSubmit} value="Send" isPrimary />
              </FormAuth>
              <PAuth>You’ll get message soon on your email</PAuth>
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
const mapDispatchToProps = { forgotPass };

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);