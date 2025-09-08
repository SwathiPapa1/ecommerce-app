import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const Home = () => {
  return (
    <>


      {/* Hero Section with background image */}
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 className="fw-bold display-3">TechNova</h1>
        <p className="lead">Innovating Gadgets & Software Solutions</p>
      </div>

      {/* Company Works */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Expertise</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm h-100">
  <Card.Img
    variant="top"
    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    alt="MacBook, iPhone, Apple Watch, and boxes"
  />
  <Card.Body className="text-center">
    <Card.Title>Gadget Store</Card.Title>
    <Card.Text>
      Browse our collection of MacBooks, iPhones, Apple Watches, earbuds,
      and accessories — all available online.
    </Card.Text>
  </Card.Body>
</Card>

          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              />
              <Card.Body>
                <Card.Title>Product Development</Card.Title>
                <Card.Text>
                  We design and build next-gen consumer electronics and IoT devices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              />
              <Card.Body>
                <Card.Title>Software Solutions</Card.Title>
                <Card.Text>
                  Web, mobile, and cloud solutions to power your digital journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Company About Paragraph */}
      <Container className="my-5">
        <h2 className="text-center mb-3">About TechNova</h2>
        <p className="text-center fs-5">
          At TechNova, we are passionate about creating cutting-edge products that
          combine hardware innovation with powerful software solutions. From
          smartphones and earbuds to cloud-based applications, our mission is to
          bring technology closer to people and businesses worldwide. We believe in
          delivering excellence, innovation, and reliability in everything we do.
        </p>
      </Container>

    
    </>
  );
};

export default Home;
