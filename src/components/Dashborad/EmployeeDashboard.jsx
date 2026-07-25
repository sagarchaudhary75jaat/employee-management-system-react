import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, logout }) => {
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#1C1C1C] text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen overflow-hidden">
      <Header data={data} logout={logout} />

      <TaskListNumbers data={data} />

      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;