import { Col, Container, Row, Card } from "react-bootstrap";
import "../App.scss";

function App() {
  return (
    <div className="app_container">
      <div className="app bg-secondary h-100 text-center">
      <Container fluid className="container p-5 h-100 ">
        <Row className="d-flex gap-3">
          <Col className="p-0 d-flex flex-column gap-3">
            <Card className="border flex-fill justify-content-center">1 of 3</Card>
            <Card className="border flex-fill justify-content-center">2 of 3</Card>
            <Card className="border flex-fill justify-content-center">3 of 3</Card>
          </Col>
          <Col className="p-0 d-flex flex-column gap-3">
            <Card className="border">1 of 5</Card>
            <Card className="border">2 of 5</Card>
            <Card className="border">3 of 5</Card>
            <Card className="border">4 of 5</Card>
            <Card className="border">5 of 5</Card>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default App;
