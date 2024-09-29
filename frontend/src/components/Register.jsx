import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await axios
        .post("https://smoktre-2.onrender.com/api/user/register", formData)
        .then((res) => {
          console.log(res);
          toast.success("User registered successfully");
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div
      className="flex justify-center items-center mx-auto"
      onSubmit={handleSubmit}
    >
      <Toaster />
      <form className="w-[450px] flex flex-col">
        <h1 className="text-center jost text-4xl mt-20  text-black ">
          Sign Up
        </h1>
        <label htmlFor="" className="mt-4 mx-4 ">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="Enter full name..."
          className="border border-gray-500 py-2 rounded-md p-3 mx-4 "
        />
        <label htmlFor="" className="mt-4 mx-4 ">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email..."
          className="border border-gray-500 py-2 rounded-md p-3 mx-4 "
        />
        <label className="mt-4 mx-4 ">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password..."
          className="border border-gray-500 py-2 mx-4 rounded-md p-3"
        />
        <button
          className="bg-[#02bfae] py-3 mt-4 text-xl uppercase px-0 rounded-md text-white w-auto mx-4 "
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
