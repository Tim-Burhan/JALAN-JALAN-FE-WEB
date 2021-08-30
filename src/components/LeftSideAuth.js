import React from "react";
import { Col } from "react-bootstrap";

import iconSplash from "../assets/img/logo/iconSplash.png";

export default function LeftSideAuth() {
  return (
    <Col
      md={6}
      lg={8}
      className="d-none d-md-flex justify-content-md-center align-items-md-center"
      style={{ backgroundColor: "#0ddb89" }}
    >
      <img src={iconSplash} alt="Logo Jalan Jalan" width="33%" />
    </Col>
  );
}
