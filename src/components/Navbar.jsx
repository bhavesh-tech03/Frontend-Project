import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <div>
    </div>
    <div className="p-4 bg-gray-800 text-white">
      <h1 className="text-4xl">TECHHORIZON</h1>
      <nav className="flex justify-end items-center h-3 gap-6" >
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-2xl w-20 flex justify-center text-black" : "")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-2xl w-20 flex justify-center text-black" : "")}
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-2xl w-20 flex justify-center text-black" : "")}
      >
        Contact
      </NavLink>
    </nav>
    </div>
    </>
  );
}