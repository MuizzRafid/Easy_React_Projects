import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import toast from "react-hot-toast";
import { NavBar } from "./components/NavBar";
import { UnUsed } from "./components/UnUsed";
import { Home } from "./components/Home";
import { getProducts } from "./api";

import { useDispatch } from "react-redux";
import { addProduct } from "./redux/ecommerceSlice";
import { AddCardPage } from "./components/AddCardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/addedCard",
    element: (
      <div>
        <NavBar></NavBar>
        <AddCardPage></AddCardPage>
      </div>
    ),
  },
  {
    path: "/unUsedStaff",
    element: (
      <div>
        <NavBar></NavBar>
        <UnUsed></UnUsed>
      </div>
    ),
  },
]);
function App() {
  const [count, setCount] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProducts();

      dispatch(addProduct(product.products));
    };
    fetchData();
  }, []);
  function handleClick() {
    toast.success("i get clicked");
  }

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
