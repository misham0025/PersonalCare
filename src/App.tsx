import "./App.css";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Page404 from "./Components/Pages/Page404";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import CustomerList from "./Components/Pages/Customer_List";
import FilterPage from "./Components/Pages/Filter_Page";
import Collection from "./Components/Pages/Collection";
import SinglePersonDetails from "./Components/Pages/Single_Person_Details";
import Testimonial from "./Components/Pages/Testmonial";
import SupportPage from "./Components/Pages/Support_Page";
import Message from "./Components/Pages/Message";
import Notification from "./Components/Pages/Notification";
import List from "./Components/Pages/List";
import { getLocalStorageItem } from "../src/Components/Services/localStorage";

function App() {
  const token = getLocalStorageItem("AUTH_TOKEN");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="*" element={<Page404 />} /> */}
      <Route path="/register" element={<Register />} />
      {!token ? <Route path="*" element={<Navigate to="/" replace />} /> : null}
      {token ? (
        <Route path="/home" element={<Home />}>
          <Route path="/home/customer" element={<FilterPage />} />
          <Route path="/home/collection" element={<Testimonial />} />
          <Route path="/home/support_page" element={<SupportPage />} />
          <Route path="/home/message" element={<Message />} />
          <Route path="/home/notification" element={<Notification />} />
        </Route>
      ) : null}
    </Routes>
  );
}

export default App;
