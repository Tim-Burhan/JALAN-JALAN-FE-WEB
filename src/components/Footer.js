import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { NavHeader } from "./GeneralStyles";

import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { BiMap } from "react-icons/bi";

const headSection = {
  fontWeight: "bold",
  fontSize: 16,
  marginBottom: 5,
};

export default function Footer() {
  return (
    <Container style={{ fontSize: 14, marginTop: 50, }} >
      <Row>
        <Col className="d-flex flex-column flex-md-row justify-content-sm-between">
          <ListGroup className="mb-3" as="ul">
            <ListGroup.Item style={NavHeader} className="border-0 p-0" as="li">
              JalanJalan
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0" as="li">
              Find your Flight and explore the world with us. We will take care
              of the rest
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="mb-3" as="ul">
            <ListGroup.Item
              className="border-0 p-0"
              as="li"
              style={headSection}
            >
              Features
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0" as="li">
              <ListGroup
                as="ul"
                className="d-flex flex-row flex-md-column justify-content-between"
              >
                <ListGroup.Item className="border-0 p-0" as="li">
                  Find Ticket
                </ListGroup.Item>
                <ListGroup.Item className="border-0 p-0" as="li">
                  My Booking
                </ListGroup.Item>
                <ListGroup.Item className="border-0 p-0" as="li">
                  Chat
                </ListGroup.Item>
                <ListGroup.Item className="border-0 p-0" as="li">
                  Notification
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="mb-3" as="ul">
            <ListGroup.Item
              className="border-0 p-0"
              as="li"
              style={headSection}
            >
              Download JalanJalan App
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex flex-md-column justify-content-center border-0 p-0"
              as="li"
            >
              <Button variant="dark" className="m-2">
                App Store
              </Button>
              <Button variant="dark" className="m-2">
                Google Play
              </Button>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="mb-3" as="ul">
            <ListGroup.Item
              className="border-0 p-0"
              as="li"
              style={headSection}
            >
              Follow Us
            </ListGroup.Item>
            <ListGroup.Item
              className="d-flex justify-content-start border-0 p-0"
              as="li"
            >
              <FiFacebook
                color="#595959"
                size={20}
                style={{ marginRight: 10 }}
              />
              <FiTwitter
                color="#595959"
                size={20}
                style={{ marginRight: 10 }}
              />
              <FiInstagram
                color="#595959"
                size={20}
                style={{ marginRight: 10 }}
              />
              <FiYoutube
                color="#595959"
                size={20}
                style={{ marginRight: 10 }}
              />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column flex-sm-row justify-content-sm-between">
          <p>
            <BiMap size={20} />
            Padang, Indonesia
          </p>
          <p>© JalanJalan. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}
