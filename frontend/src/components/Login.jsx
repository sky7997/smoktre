import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
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
        .post("https://smoketrees-backend.onrender.com/api/user/login", formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.userId);
          if (res.data.success) {
            toast.success("Logged in successfully");
            navigate("/dashboard");
          } else {
            toast.error("something went wrong");
          }
        });
    } catch (error) {
      console.log(error);
      toast.error("Logging in failed");
    }
  };
  return (
    <div className="flex justify-center items-center mx-auto ">
      <Toaster />
      <form className=" flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-center jost text-4xl mt-20  text-black py-2 w-[450px] ">
          Sign In
        </h1>
        <label htmlFor="" className="mt-4 mx-4">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Enter email..."
          className="border border-gray-500 py-3  rounded-md p-3 mx-4"
        />
        <label className="mt-4 mx-4">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="Enter password..."
          className="mx-4 border border-gray-500 py-3  rounded-md p-3"
        />
        <button
          className="bg-[#02bfae] py-3 mt-4 text-xl uppercase px-6 rounded-md text-white mx-4"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
