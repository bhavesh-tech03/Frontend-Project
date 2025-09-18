import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";


export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
}
