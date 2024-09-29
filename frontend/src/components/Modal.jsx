import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Modal = ({ openModal, setOpenModal, userId }) => {
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    mobile: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://smoketrees-backend.onrender.com/api/address/add_address`,
        {
          userId,
          address: formData,
        }
      );
      if (response.data.success) {
        toast.success("Address added successfully");
        setOpenModal(false);
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.error("Error adding address:", error);
      toast.error("error adding address");
    }
  };

  return (
    openModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <Toaster />
        <div className="flex transform -translate-x-1/2 -translate-y-1/2 absolute md:top-1/2 md:left-1/2 md:w-[450px] md:h-[500px] z-50 px-4 font-semibold overflow-x-hidden overflow-y-auto inset-0 bg-white outline-none focus:outline-none flex-col justify-center items-center rounded-lg top-1/2 left-1/2 w-[380px] h-full">
          <ImCross
            className="absolute z-50 text-xl text-black top-4 right-3"
            onClick={() => setOpenModal(false)}
          />
          <h1 className="text-2xl border-b border-black">Add Address</h1>
          <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
              <label htmlFor="name" className="w-32 text-black align-baseline">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 w-48 px-4 py-1 border-b border-black outline-none md:w-60"
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="mobile"
                className="w-32 text-black align-baseline"
              >
                Mobile No
              </label>
              <input
                id="mobile"
                type="number"
                placeholder="Enter Mobile No"
                value={formData.mobile}
                onChange={handleChange}
                className="flex-1 px-4 py-1 border-b border-black outline-none w-60"
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="pincode"
                className="w-32 text-black align-baseline"
              >
                Pincode
              </label>
              <input
                id="pincode"
                type="text"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="flex-1 px-4 py-1 border-b border-black outline-none w-60"
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="relation"
                className="w-32 text-black align-baseline"
              >
                Relation
              </label>
              <select
                id="relation"
                value={formData.relation}
                onChange={handleChange}
                className="flex-1 px-4 py-1 border-b border-black outline-none w-60"
              >
                <option value="">Select Relation</option>
                <option value="Home">Home</option>
                <option value="Friends">Friends</option>
                <option value="Work">Work</option>
                <option value="Relative">Relative</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="address"
                className="w-32 text-black align-baseline"
              >
                Address
              </label>
              <textarea
                id="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
                className="flex-1 w-48 px-4 py-1 border-b border-black outline-none md:w-60"
              />
            </div>
            <button
              className="px-4 py-2 mt-4 text-white bg-black rounded hover:scale-105 opacity-80"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
