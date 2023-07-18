import "./App.css";
import {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />}>
        <Route path="/home/customer" element={<FilterPage />} />
        <Route path="/home/collection" element={<Testimonial />} />
        <Route path="/home/support_page" element={<SupportPage />} />
      </Route>
    </Routes>
  );
}

export default App;
