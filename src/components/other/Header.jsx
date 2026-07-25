import React from "react";

const Header = ({ data, logout }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data?.firstName || "Admin"} 👋
        </span>
      </h1>

      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;