// src/pages/Products.js
import React from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import products from "../data/products";

const Products = ({ addToCart, message }) => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Our Gadgets</h2>

      {/* ✅ Success Message */}
      {message && (
        <Alert variant="success" className="text-center fw-bold">
          {message}
        </Alert>
      )}

      <Row>
        {products.map((product) => (
          <Col lg={4} md={6} sm={12} className="mb-4" key={product.id}>
            <Card className="h-100 shadow border-0 rounded-3">
              {/* ✅ Product Image */}
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#f8f9fa",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              >
                <Card.Img
                  src={product.image}
                  alt={product.title}
                  style={{
                    maxHeight: "240px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-dark">
                  {product.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.company}
                </Card.Subtitle>
                <Card.Text style={{ flex: 1 }}>{product.description}</Card.Text>

                {/* ✅ Changed ₹ to $ */}
                <h5 className="text-success fw-bold mb-3">
                  ${product.price}
                </h5>

                <Button
                  variant="primary"
                  className="w-100 mt-auto"
                  onClick={() => addToCart(product)}
                >
                  🛒 Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
