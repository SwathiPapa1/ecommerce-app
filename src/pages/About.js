import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";


const rightImg =
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop";

const leadershipImgs = {
  ceo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
  founder:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  cofounder:
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
};

const leaders = [
  {
    name: "John Doe",
    role: "CEO",
    img: leadershipImgs.ceo,
    desc: "Guiding vision and product strategy.",
    bio: `John Doe has over 15 years of experience in the technology industry. 
He has successfully led multiple product launches, transforming early-stage 
ideas into globally recognized solutions. His leadership style is focused 
on empowering teams, encouraging innovation, and ensuring that customers 
remain at the heart of every decision. John strongly believes in transparency 
and sustainable growth. Under his guidance, the company has expanded into 
international markets and built strong partnerships. His vision continues 
to drive the company’s success and reputation.`,
  },
  {
    name: "Jane Smith",
    role: "Founder",
    img: leadershipImgs.founder,
    desc: "Customer success & partnerships.",
    bio: `Jane Smith is the visionary founder who established the company 
with a mission to solve real-world problems through technology. She brings 
unmatched passion for customer success and has built long-lasting 
partnerships with global clients. Jane has a strong background in 
entrepreneurship and product development, which has helped shape the 
company’s culture of innovation. She continues to mentor young 
entrepreneurs, advocate for women in tech, and represent the company at 
international forums. Her dedication ensures the organization maintains a 
strong connection with its values and stakeholders.`,
  },
  {
    name: "Mike Johnson",
    role: "Co-Founder",
    img: leadershipImgs.cofounder,
    desc: "Engineering & platform architecture.",
    bio: `Mike Johnson is the co-founder and a technology leader 
specializing in engineering excellence. With over a decade of experience 
in platform architecture, he ensures the company’s solutions are secure, 
scalable, and future-ready. Mike has spearheaded the adoption of modern 
tools and frameworks, reducing costs and improving delivery timelines. 
His focus on quality and performance has set high standards across the 
engineering team. Beyond his technical expertise, Mike is known for 
mentoring engineers, fostering a collaborative culture, and pushing the 
boundaries of what technology can achieve for customers worldwide.`,
  },
];

const About = () => {
  const [show, setShow] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const handleShow = (leader) => {
    setSelectedLeader(leader);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
     

      {/* About Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About TechNova</h2>
            <p>
              We started with a simple mission: build products that people love.
              Today, MyCompany powers thousands of customers worldwide with our
              trusted services and ecommerce solutions.
            </p>
            <p>
              Our culture values craftsmanship, empathy, and continuous
              learning. We believe great teams build great products.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={rightImg}
              alt="About"
              className="img-fluid rounded"
              style={{ objectFit: "cover", width: "100%", height: 320 }}
            />
          </Col>
        </Row>
      </Container>

      {/* Leadership Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Leadership</h2>
        <Row>
          {leaders.map((leader, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={leader.img}
                  alt={leader.role}
                  style={{
                    height: 400,
                    width: "100%",
                    objectFit: "cover",
                    objectPosition:
                      leader.role === "Founder" ? "center top" : "center",
                  }}
                />
                <Card.Body>
                  <Card.Title>{leader.name}</Card.Title>
                  <Card.Subtitle className="text-muted mb-2">
                    {leader.role}
                  </Card.Subtitle>
                  <Card.Text>{leader.desc}</Card.Text>
                  <Button variant="primary" onClick={() => handleShow(leader)}>
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for See More */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLeader?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-line" }}>
          <p>
            <strong>{selectedLeader?.role}</strong>
          </p>
          <p>{selectedLeader?.bio}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Closing Text */}
      <Container className="mb-5">
        <p className="text-center">
          We’re committed to transparency and sustainable growth. Our teams work
          closely with clients to deliver measurable impact.
        </p>
      </Container>

    

    </>
  );
};

export default About;
