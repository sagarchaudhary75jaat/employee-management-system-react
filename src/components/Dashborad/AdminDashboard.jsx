import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({ logout }) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] p-10 overflow-y-auto">
      <Header logout={logout} />

      <CreateTask />

      <AllTask />
    </div>
  );
};

export default AdminDashboard;