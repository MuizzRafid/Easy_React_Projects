import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Paste from "./components/Paste";
import Home from "./components/Home";
import ViewPaste from "./components/ViewPaste";
import { RouterProvider } from "react-router-dom";

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
    path: "/pastes",
    element: (
      <div>
        <NavBar></NavBar>
        <Paste></Paste>
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <NavBar></NavBar>
        <ViewPaste></ViewPaste>
      </div>
    ),
  },
  {
    path: "",
    element: <div></div>,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
