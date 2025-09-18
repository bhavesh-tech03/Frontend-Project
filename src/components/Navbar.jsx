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
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-2xl w-30 flex justify-center text-black" : "")}
      >
        <p className="text-2xl">Home</p>
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-2xl w-30 flex justify-center text-black" : "")}
      >
        <p className="text-2xl">About</p>
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => (isActive ? "bg-red-200 rounded-2xl w-30 flex justify-center text-black" : "")}
      >
        <p className="text-2xl">Contact</p>
      </NavLink>
    </nav>
    </div>
    </>
  );
}