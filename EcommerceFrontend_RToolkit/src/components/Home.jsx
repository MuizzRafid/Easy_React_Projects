import React from "react";
import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCardProduct } from "../redux/ecommerceSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const products = useSelector((state) => state.shop.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleAddCard(product) {
    dispatch(addCardProduct(product));
    navigate("/addedCard");
  }

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setDebouncedSearch(searchData);
    }, 500);

    return () => clearTimeout(setTimer);
  }, [searchData, debouncedSearch]);

  const filterProducts = useMemo(() => {
    const searchTerm = debouncedSearch.trim().toLowerCase();
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm),
    );
  }, [debouncedSearch, products]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center bg-orange-600 pb-3 px-4 ">
        <input
          className="p-3 bg-white w-full sm:w-[500px] max-w-full outline-none "
          type="text"
          placeholder="Search in Daraz ..."
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />

        <button className="p-3 bg-blue-200 w-full sm:w-auto text-orange-800">
          <NavLink to="/addedcard">Added Card</NavLink>
        </button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center p-4">
        {filterProducts.length === 0 ? (
          <p>No product found</p>
        ) : (
          filterProducts?.map((product, index) => {
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
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-green-800">
                    Show Card
                  </button>

                  <button
                    className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-green-800"
                    onClick={() => handleAddCard(product)}
                  >
                    Add Card
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
