import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-300 py-4 px-6 shadow-md fixed w-full h-24 top-0 z-50">
        <div className="">

      <img src="/iveylogo.png" alt="Logo" className="w-16 h-16 " />
        </div>
      <ul className="flex gap-6 text-lg font-medium text-black">
      <li>
          <NavLink
            to="/"
            className="hover:text-red-300 transition"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/beauty"
            className="hover:text-red-300 transition"
          >
            Beauty
          </NavLink>
        </li>
      
        <li>
          <NavLink
            to="/groceries"
            className="hover:text-red-300 transition"
          >
            Groceries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="hover:text-red-300 transition"
          >
            All Products
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavBar;
