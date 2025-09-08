import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide alert automatically after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
     

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg p-4 border-0">
              <h2 className="text-center mb-4">Contact Us</h2>

              {submitted && (
                <Alert
                  variant="success"
                  className="text-center fw-bold"
                  onClose={() => setSubmitted(false)}
                  dismissible
                >
                  ✅ Details sent successfully! Our team will contact you soon.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* Location Section */}
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <h4 className="mb-3">Our Location</h4>
            <div
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <iframe
                title="company-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094657!2d144.95565131531043!3d-37.81732797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjQiUyAxNDTCsDU3JzI0LjQiRQ!5e0!3m2!1sen!2sin!4v1632989319385!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Company Address */}
            <div className="mt-4">
              <h5 className="fw-bold">📍 Gadget Store Pvt. Ltd.</h5>
              <p className="mb-1">123 Tech Park, Silicon Valley</p>
              <p className="mb-1">San Francisco, CA, USA</p>
              <p className="text-muted">
                ✉ <a href="mailto:support@gadgetstore.com">support@gadgetstore.com</a> | ☎{" "}
                <a href="tel:+1234567890">+1 234 567 890</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

   
    </>
  );
};

export default Contact;
