import React from "react";
import { Button } from "react-bootstrap";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border rounded p-2 mb-2">
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 6 }}
        />
        <div>
          <div className="fw-semibold">{item.name}</div>
          <div className="text-muted">${item.price} x {item.quantity}</div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Button size="sm" variant="success" onClick={() => increaseQuantity(item.id)}>+</Button>
        <Button size="sm" variant="warning" onClick={() => decreaseQuantity(item.id)}>-</Button>
        <Button size="sm" variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
