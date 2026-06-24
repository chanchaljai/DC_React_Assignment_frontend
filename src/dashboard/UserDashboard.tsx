import React from "react";
import { useNavigate } from "react-router-dom";
import logout from "../utils/logout";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import Sidebar from "../components/Sidebar";

const UserDashboard = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [sidebar, setSidebar] = React.useState<boolean>(false);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
    <Navbar setIsOpen={setIsOpen} setSidebar={setSidebar} />
    {isOpen && <Popup setIsOpen={setIsOpen} />}
    {sidebar && <Sidebar setSidebar={setSidebar} />}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
          <h1 className="text-2xl font-bold text-purple-500 mb-6">
            User Dashboard Page
          </h1>
          <button
            onClick={handleLogout}
            className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
