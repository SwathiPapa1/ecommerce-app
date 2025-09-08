import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import { Alert, Container } from "react-bootstrap";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState(""); // ✅ for success message

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // ✅ show success message (use product.title)
    setMessage(`✅ ${product.title} added to cart!`);
    setTimeout(() => setMessage(""), 3000); // auto-hide in 3s
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* ✅ Navbar always on top */}
      <NavigationBar />

      {/* ✅ Success message */}
      {message && (
        <Container className="mt-3">
          <Alert variant="success" className="text-center fw-bold">
            {message}
          </Alert>
        </Container>
      )}

      {/* ✅ Main content expands */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>

      {/* ✅ Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default App;
