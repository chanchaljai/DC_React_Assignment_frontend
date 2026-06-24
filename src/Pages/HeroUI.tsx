import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const HeroUI = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    const role = localStorage.getItem("role");
    if (role === "admin") navigate("/dashboard/admin");
    else navigate("/dashboard/user");
  };
  return (
    <>
      <div className="flex justify-center gap-30 m-5">
        <h1 className="text-2xl font-bold text-center mt-2 ">HeroUI Page</h1>
        <button onClick={handleBack}
        className="bg-indigo-500 text-white hover:bg-indigo-600 rounded px-4 py-2 text-2xl">Go To Dashboard</button>
      </div>

      <Tabs defaultSelectedKey="profile">
        <TabList aria-label="User Information">
          <Tab id="profile">Profile</Tab>
          <Tab id="security">Security</Tab>
          <Tab id="description">Description</Tab>
          <Tab id="settings">Settings</Tab>
          <Tab id="contact">Contact</Tab>
        </TabList>

        <TabPanel id="profile">
          <h3>Profile</h3>
          <p>Name: Chanchal</p>
          <p>Email: abc@gmail.com</p>
          <p>Role: Frontend Developer</p>
        </TabPanel>

        <TabPanel id="security">
          <h3>Security</h3>
          <p>Change Password</p>
          <p>Enable Two-Factor Authentication</p>
        </TabPanel>

        <TabPanel id="description">
          <h3>Description</h3>
          <p>
            This tab contains information about the user and account details.
          </p>
        </TabPanel>

        <TabPanel id="settings">
          <h3>Settings</h3>
          <p>Theme: Dark Mode</p>
          <p>Language: English</p>
        </TabPanel>

        <TabPanel id="contact">
          <h3>Contact</h3>
          <p>Phone: +91 9988776655</p>
          <p>Address: Patna, Bihar</p>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default HeroUI;
