import React from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, ContactsFilled } from "@ant-design/icons";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
const HomeAdmin = () => {
  const navigate = useNavigate();
  const handleNavigate = (typeNavigate) => {
    if (typeNavigate === "user") navigate(`/admin/${typeNavigate}`);
    else navigate(`/admin/${typeNavigate}`)
    
  };
  return (
    <React.Fragment>
      <Container>
        <h1 className="text-success text-center fw-bold fs-3">Admin Feature</h1>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">User Management</Card.Title>
                <Card.Text className="text-center">
                  <Container>
                    <Button
                      variant="success"
                      size="lg"
                      onClick={() => {
                        handleNavigate("user");
                      }}
                    >
                      <UserOutlined />
                    </Button>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Tour Management</Card.Title>
                <Card.Text className="text-center">
                  <Container>
                    <Button
                      variant="success"
                      size="lg"
                      onClick={() => {
                        handleNavigate("tour");
                      }}
                    >
                      <ContactsFilled />
                    </Button>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default React.memo(HomeAdmin);
