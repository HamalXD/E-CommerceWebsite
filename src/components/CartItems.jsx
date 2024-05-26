import React from "react";
import { Link } from "react-router-dom";

const CartItems = ({ item }) => {
  const { id, image, title, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          {" "}
          <img className="max-w-[80px]" src={item.image} alt={item.title} />
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
