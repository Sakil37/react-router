import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

//
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col style={{padding:"10px 0",background:"bisque"}}>
          <h1 style={{ textAlign: "center" }}>
            This is footer
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
