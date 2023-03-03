import React, { useState } from "react";
import "./App.scss";
import { Col, ListGroup, Row, Container, Form, Button } from "react-bootstrap";
import Accordion from "./Components/Accordion";
import Alert from "./Components/Alert";
import Card from "./Components/Card";
import List from "./Components/List Group";
import ModalExample from "./Components/Modal";
import NavDropdownExample from "./Components/Navs";
import NavbarExample from "./Components/Navbar";
import NavbarTop from "./Navbar/Navbar";
import BatchExample from "./Components/Batch";
import BreadcrumbExample from "./Components/Breadcrumb";
import ButtonExample from "./Components/Buttons";
import ButtonGroupExample from "./Components/Button Group";
import CarouselExample from "./Components/Carousel";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Alert");
  const [activeIndex, setActiveIndex] = useState("Alert");

  const handlePageClick = (index) => {
    setActiveIndex(index);
    setCurrentPage(index);
  };

  return (
    <div className="home vh-100">
      <Row className="navbar p-0 position-sticky top-0">
        <NavbarTop />
      </Row>

      <Row className="lsh_rhs">
        <Col xs={2} className="lhs_sideBar p-0 p-3 h-100">
          <div className="sidebar_container flex-nowrap h-100">
            <div className="search_form mt-2 px-2">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <hr className="mb-0"></hr>
            </div>
            <div className="SideNav">
              <div className="SideNav_TableOfContents">
                <ListGroup variant="flush">
                  <ListGroup.Item
                    onClick={() => handlePageClick("Alert")}
                    active={activeIndex === "Alert"}
                    className={activeIndex === "Alert" ? "active-item" : ""}
                  >
                    Alert
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("Accordion")}
                    active={activeIndex === "Accordion"}
                    className={activeIndex === "Accordion" ? "active-item" : ""}
                  >
                    Accordion
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("BatchExample")}
                    active={activeIndex === "BatchExample"}
                    className={
                      activeIndex === "BatchExample" ? "active-item" : ""
                    }
                  >
                    Batch
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("BreadcrumbExample")}
                    active={activeIndex === "BreadcrumbExample"}
                    className={
                      activeIndex === "BreadcrumbExample" ? "active-item" : ""
                    }
                  >
                    Breadcrumb
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("ButtonExample")}
                    active={activeIndex === "ButtonExample"}
                    className={
                      activeIndex === "ButtonExample" ? "active-item" : ""
                    }
                  >
                    Buttons
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("ButtonGroupExample")}
                    active={activeIndex === "ButtonGroupExample"}
                    className={
                      activeIndex === "ButtonGroupExample" ? "active-item" : ""
                    }
                  >
                    Button Group
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("Card")}
                    active={activeIndex === "Card"}
                    className={activeIndex === "Card" ? "active-item" : ""}
                  >
                    Card
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("CarouselExample")}
                    active={activeIndex === "CarouselExample"}
                    className={
                      activeIndex === "CarouselExample" ? "active-item" : ""
                    }
                  >
                    Carousel
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
                    className={
                      activeIndex === "ModalExample" ? "active-item" : ""
                    }
                  >
                    Modal
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("NavDropdownExample")}
                    active={activeIndex === "NavDropdownExample"}
                    className={
                      activeIndex === "NavDropdownExample" ? "active-item" : ""
                    }
                  >
                    Navs
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => handlePageClick("Navbar")}
                    active={activeIndex === "Navbar"}
                    className={activeIndex === "Navbar" ? "active-item" : ""}
                  >
                    Navbar
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </Col>
        <Col className="border p-0">
          <div className="p-5">
            {/* <div className="fs-3">Welcome To React Bootstrap</div> */}
            {currentPage === "Alert" && (
              <div>
                <Alert />
              </div>
            )}
            {currentPage === "Accordion" && (
              <div className="">
                <Accordion />
              </div>
            )}
            {currentPage === "BatchExample" && (
              <div>
                <BatchExample />
              </div>
            )}
            {currentPage === "BreadcrumbExample" && (
              <div>
                <BreadcrumbExample />
              </div>
            )}
            {currentPage === "ButtonExample" && (
              <div>
                <ButtonExample />
              </div>
            )}
            {currentPage === "ButtonGroupExample" && (
              <div>
                <ButtonGroupExample />
              </div>
            )}
            {currentPage === "Card" && (
              <div>
                <Card />
              </div>
            )}
            {currentPage === "CarouselExample" && (
              <div>
                <CarouselExample />
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
            {currentPage === "NavDropdownExample" && (
              <div>
                <NavDropdownExample />
              </div>
            )}
            {currentPage === "Navbar" && (
              <div>
                <NavbarExample />
              </div>
            )}
          </div>
        </Col>
        {/* <Col xs={2} className="border p-0">
          <p className="text-center fs-3">Hello</p>
        </Col> */}
      </Row>
    </div>
  );
};

export default Home;
