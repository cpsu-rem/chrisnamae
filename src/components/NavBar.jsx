import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-black py-4 px-6 shadow-md fixed w-full h-28 top-0 z-50">
        <div className="">

      <img src="/chrisnalogo.png" alt="Logo" className="w-24 h-24 " />
        </div>
      <ul className="flex gap-6 text-lg font-medium text-white">
      <li>
          <NavLink
            to="/"
            className="hover:text-blue-300 transition"
          >
            Home
          </NavLink>
        </li>
       
      
        <li>
          <NavLink
            to="/womensclothing"
            className="hover:text-blue-300 transition"
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mensclothing"
            className="hover:text-blue-300 transition"
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allproducts"
            className="hover:text-blue-300 transition"
          >
            Shop Now
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavBar;
