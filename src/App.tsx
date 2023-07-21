import "./App.css";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import FilterPage from "./Components/Pages/Filter_Page";
import Testimonial from "./Components/Pages/Testmonial";
import SupportPage from "./Components/Pages/Support_Page";
import Message from "./Components/Pages/Message";
import Notification from "./Components/Pages/Notification";
import { getLocalStorageItem } from "../src/Components/Services/localStorage";

function App() {
  const navigate = useNavigate();
  let isAuth = localStorage.getItem("AUTH_TOKEN");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {isAuth ? (
        <Route path="/home" element={<Home />}>
          <Route path="/home/customer" element={<FilterPage />} />
          <Route path="/home/collection" element={<Testimonial />} />
          <Route path="/home/support_page" element={<SupportPage />} />
          <Route path="/home/message" element={<Message />} />
          <Route path="/home/notification" element={<Notification />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/" replace />} />
      )}
    </Routes>
  );
}

export default App;
