import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkStyle, NavHeader } from "./GeneralStyles";
import { openNavbar } from "../redux/actions/auth";

const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function AuthHeader(props) {
  const exitAuth = () => {
    props.openNavbar();
  };

  return (
    <Container className="position-fixed fixed-top">
      <Link style={LinkStyle} to="/">
        <Header>
          <div onClick={exitAuth} style={NavHeader}>
            JalanJalan
          </div>
        </Header>
      </Link>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  onAuth: state.onAuth,
});

const mapDispatchToProps = { openNavbar };

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
