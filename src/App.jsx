import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashborad/EmployeeDashboard";
import AdminDashboard from "./components/Dashborad/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { userData } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Restore login after refresh
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (storedUser) {
      setUser(storedUser.role);

      if (storedUser.role === "employee") {
        setLoggedInUser(storedUser.data);
      }
    }
  }, []);

  // Keep employee data updated
  useEffect(() => {
    if (user === "employee" && loggedInUser && userData) {
      const updatedEmployee = userData.employees.find(
        (emp) => emp.id === loggedInUser.id
      );

      if (updatedEmployee) {
        setLoggedInUser(updatedEmployee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: updatedEmployee,
          })
        );
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (!userData) return;

    // Admin Login
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
        })
      );

      return;
    }

    // Employee Login
    const employee = userData.employees.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUser(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee,
        })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#1C1C1C] text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard logout={logout} />
      ) : (
        <EmployeeDashboard
          data={loggedInUser}
          logout={logout}
        />
      )}
    </>
  );
};

export default App;