import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const userId = localStorage.getItem("token");

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/address/get_addresses/${userId}`
      );
      if (response.data.success) {
        setAddresses(response.data.addresses);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, [userId]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Stay Connected: Your Digital Address Book
        </h1>
        <div className="flex gap-4 mb-6">
          <button
            className="w-full bg-teal-500 text-white uppercase text-lg rounded-md py-2 hover:bg-teal-600 transition duration-300"
            onClick={handleModal}
          >
            Add Address
          </button>
          <button
            className="w-full bg-gray-500 text-white uppercase text-lg rounded-md py-2 hover:bg-gray-600 transition duration-300"
            onClick={fetchAddresses}
          >
            Refresh
          </button>
        </div>
        {openModal && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            userId={userId}
          />
        )}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-center">Your Addresses:</h2>
          <ul className="mt-4 space-y-4">
            {addresses.map((address, index) => (
              <li key={index} className="border border-gray-300 rounded-lg p-4 shadow-md">
                <p className="text-gray-800">
                  <strong>Name:</strong> {address.name}
                </p>
                <p className="text-gray-800">
                  <strong>Mobile:</strong> {address.mobile}
                </p>
                <p className="text-gray-800">
                  <strong>Pincode:</strong> {address.pincode}
                </p>
                <p className="text-gray-800">
                  <strong>Relation:</strong> {address.relation}
                </p>
                <p className="text-gray-800">
                  <strong>Address:</strong> {address.address}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
