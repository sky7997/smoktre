import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const location = useLocation();
  return (
    <div className="px-[15vw] py-3 flex justify-between">
      <div className="flex items-center gap-3 jost ">
        <p className="flex items-center gap-3 text-3xl">
          <FaAddressBook className="text-[#fe9240] text-4xl" /> AddressBook
        </p>
        <p className="text-gray-500 text-md">
          Your convenient online address book.
        </p>
      </div>
      {!localStorage.getItem("token") ? (
        <div className="flex gap-3">
          <Link to="/login">
            <button className="px-6 py-2 bg-[#fe9240] rounded-md text-white text-md uppercase">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-2 border border-[#fe9240] rounded-md text-black text-md uppercase">
              Register
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <p>DASHBOARD</p>
          <button
            className="bg-[#02bfae] px-5 py-2 rounded-md text-white"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
