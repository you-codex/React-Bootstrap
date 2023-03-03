import React, { useState } from "react";
import { Col, ListGroup, Row, Container } from "react-bootstrap";
import Accordion from "./Components/Accordion";
import Alert from "./Components/Alert";
import Card from "./Components/Card";
import List from "./Components/List Group";
import ModalExample from "./Components/Modal"

const Home = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [activeIndex, setActiveIndex] = useState();

  const handlePageClick = (index) => {
    setActiveIndex(index);
    setCurrentPage(index);
  };

  return (
    <div className="">
      <Row className="">
        <Col xs={2} className="border p-0">
          <ListGroup variant="flush">
            <ListGroup.Item
              onClick={() => handlePageClick("Accordion")}
              active={activeIndex === "Accordion"}
              className={activeIndex === "Accordion" ? "active-item" : ""}
            >
              Accordion
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => handlePageClick("Alert")}
              active={activeIndex === "Alert"}
              className={activeIndex === "Alert" ? "active-item" : ""}
            >
              Alert
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => handlePageClick("Card")}
              active={activeIndex === "Card"}
              className={activeIndex === "Card" ? "active-item" : ""}
            >
              Card
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => handlePageClick("List")}
              active={activeIndex === "List"}
              className={activeIndex === "List" ? "active-item" : ""}
            >
              List Group
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => handlePageClick("ModalExample")}
              active={activeIndex === "ModalExample"}
              className={activeIndex === "ModalExample" ? "active-item" : ""}
            >
              Modal
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="border rounded p-0 vh-100">
          <Container className="px-5 pt-5">
            {currentPage === "Accordion" && (
              <div className="">
                <Accordion />
              </div>
            )}
            {currentPage === "Alert" && (
              <div>
                <Alert />
              </div>
            )}
            {currentPage === "Card" && (
              <div>
                <Card />
              </div>
            )}
            {currentPage === "List" && (
              <div>
                <List />
              </div>
            )}
            {currentPage === "ModalExample" && (
              <div>
                <ModalExample />
              </div>
            )}
          </Container>
        </Col>
        <Col xs={2} className="border rounded p-0 vh-100">
         <p className="text-center fs-3">Hello</p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
