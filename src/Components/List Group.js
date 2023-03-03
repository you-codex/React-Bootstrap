import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function List() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Link 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Link 4
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              Link 5
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              Link 6
            </ListGroup.Item>
            <ListGroup.Item action href="#link7">
              Link 7
            </ListGroup.Item>
            <ListGroup.Item action href="#link8">
              Link 8
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default List;
