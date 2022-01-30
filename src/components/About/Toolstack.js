import React from "react";
import { Col, Row } from "react-bootstrap";
import foto from "../../Assets/cert/certi.png";
import foto1 from "../../Assets/cert/certi2.webp";
import foto2 from "../../Assets/cert/certi3.webp";
import foto3 from "../../Assets/cert/certi4.webp";
import foto4 from "../../Assets/cert/certi5.webp";
import foto5 from "../../Assets/cert/olsa.jpg";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={foto} alt="Example3" width="250" height="250"/>
        <foto />
      </Col>
	  
      <Col xs={4} md={2} className="tech-icons">
	  <img src={foto1} alt="Example3" width="250" height="250"/>
        <foto1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={foto2} alt="Example3" width="250" height="250"/>
        <foto2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={foto3} alt="Example3" width="250" height="250"/>
        <foto3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
	  <img src={foto4} alt="Example3" width="250" height="250"/>
        <foto4 />
      </Col>
	        <Col xs={4} md={2} className="tech-icons">
	  <img src={foto5} alt="Example3" width="250" height="250"/>
        <foto4 />
      </Col>
    </Row>
  );
}

export default Toolstack;
