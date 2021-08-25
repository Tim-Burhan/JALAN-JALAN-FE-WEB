import React from "react";

import { Row, Col } from "react-bootstrap";
import { SectionHori, TextLabel, TextCity } from "../components/GeneralStyled";
import { BsArrowUpDown } from "react-icons/bs";

import CardAirLine from "./CardAirLine";

export default function CardAirList() {
  return (
    <Row className="my-3">
      <Col>
        <SectionHori className="mb-3">
          <TextCity>Select Ticket</TextCity>
          <SectionHori>
            <TextLabel>Sort By</TextLabel>
            <BsArrowUpDown />
          </SectionHori>
        </SectionHori>
        <CardAirLine />
      </Col>
    </Row>
  );
}
