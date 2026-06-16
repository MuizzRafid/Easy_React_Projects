import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCardProduct } from "../redux/ecommerceSlice";
import { useNavigate } from "react-router-dom";
export const AddCardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardProduct = useSelector((state) => state.shop.cardProduct);
  console.log(cardProduct);

  function handleRemoveCard(productid) {
    dispatch(removeCardProduct(productid));
    navigate("/addedCard");
  }
  const totalPrice = cardProduct.reduce(
    (total, product) => total + product.price,
    0,
  );
  return (
    <div className="h-screen flex flex-col justify-around items-center">
      <div className="flex w-full flex-wrap gap-5 mt-2 justify-center">
        {cardProduct?.map((product, index) => {
          return (
            <div
              key={`${product.id}-${index}`}
              className="w-64 bg-white border-0 rounded-lg shadow-md p-4 hover:shadow-xl transition"
            >
              {/* Title */}
              <h2 className="text-sm font-semibold line-clamp-2 h-12">
                {product.title}
              </h2>

              {/* Price */}
              <p className="text-gray-600 mt-1">${product.price}</p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-green-800"
                  onClick={() => handleRemoveCard(product.id)}
                >
                  Remove Card
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-2 mx-10 rounded-md text-white font-bond text-lg p-4 bg-orange-500 hover:pointer hover:bg-orange-600 shadow-md flex justify-center">
        <h1>Total Cost:{totalPrice}</h1>
      </div>
    </div>
  );
};
