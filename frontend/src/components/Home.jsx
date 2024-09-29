import React from "react";
import banner from "./../assets/mailbook-postman.svg";
import blue from "./../assets/blue.svg";
import pink from "./../assets/pink.svg";
import purple from "./../assets/purple.svg";
import orange from "./../assets/orange.svg";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Seamless Address Management
          </h1>
          <p className="text-xl mb-6">
            Simplify invitations and holiday cards with organized and secure address management.
          </p>
          <div className="flex gap-6">
            <button className="bg-white text-blue-600 hover:bg-gray-100 transition-colors px-8 py-4 rounded-full shadow-md">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 transition-colors px-8 py-4 rounded-full shadow-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src={pink} alt="Address Management" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-lg uppercase tracking-wide">Simple & Effective</p>
        <h2 className="text-3xl font-bold mt-2">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        {[
          { img: orange, title: "Create Address Book", desc: "Set up a secure, personalized address book in seconds." },
          { img: blue, title: "Share the Invite", desc: "Send your unique invite link through any platform." },
          { img: pink, title: "Save Address", desc: "Contacts add their addresses to your book, easily and quickly." },
          { img: purple, title: "Create Labels", desc: "Generate and print professional labels for any occasion." },
        ].map((item, index) => (
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center" key={index}>
            <img src={item.img} alt={item.title} className="mx-auto h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
