import React from "react";
import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";

const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
   
   
      <Container className="my-5">
        <h2 className="mb-3">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
            <hr />
            <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
          </>
        )}
      </Container>
      
    </>
  );
};

export default CartPage;
