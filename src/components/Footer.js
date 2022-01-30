import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>

        <Col md="1" className="footer-copywright">
          <h3>Copyright © {year} FH</h3>
        </Col>
        <Col md="1" className="footer-body">
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
