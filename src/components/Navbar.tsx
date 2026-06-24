import React from "react";
import avtar from "../assets/Avtar1.webp";
import { IoMdMenu } from "react-icons/io";

const Navbar = ({setIsOpen, setSidebar}) => {
  return (
    <nav className="w-full h-16 bg-white shadow flex items-center px-4">
      {/* left hemberger */}
      <div className="flex-1 flex justify-start">
        <button
         className="text-2xl hover:text-indigo-600 hover:cursor-pointer">
          <IoMdMenu onClick={()=>setSidebar(prev=>!prev)}/>
        </button>
      </div>
      {/* centre logo */}
      <div className="flex-1 flex justify-center text-2xl text-indigo-600 font-bold">
        <h1>HomePage</h1>
      </div>
      {/* right login + Avtar */}
      <div className="flex-1 flex justify-end gap-4">
        <button onClick={()=>setIsOpen(true)}
        className="bg-indigo-500 text-white hover:bg-indigo-600 hover:cursor-pointer rounded-lg px-3 py-0">Popup</button>
        <div className="w-10 h-10">
          <img
            className="w-full h-full rounded-full object-cover"
            src={avtar}
            alt="Avtar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
