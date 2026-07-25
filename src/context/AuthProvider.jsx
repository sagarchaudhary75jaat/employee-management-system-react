import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();

    // Calculate task counts when the app starts
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      taskCounts: {
        newTask: emp.tasks.filter((task) => task.newTask).length,
        active: emp.tasks.filter((task) => task.active).length,
        completed: emp.tasks.filter((task) => task.completed).length,
        failed: emp.tasks.filter((task) => task.failed).length,
      },
    }));

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setUserData({
      employees: updatedEmployees,
      admin,
    });
  }, []);

  // ==========================
  // Save Employees
  // ==========================
  const saveEmployees = (employees) => {
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      taskCounts: {
        newTask: emp.tasks.filter((task) => task.newTask).length,
        active: emp.tasks.filter((task) => task.active).length,
        completed: emp.tasks.filter((task) => task.completed).length,
        failed: emp.tasks.filter((task) => task.failed).length,
      },
    }));

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setUserData((prev) => ({
      ...prev,
      employees: updatedEmployees,
    }));
  };

  // ==========================
  // Create Task
  // ==========================
  const createTask = (assignTo, task) => {
    const employees = userData.employees.map((emp) => {
      if (emp.firstName !== assignTo) return emp;

      return {
        ...emp,
        tasks: [
          ...emp.tasks,
          {
            ...task,
            newTask: true,
            active: false,
            completed: false,
            failed: false,
          },
        ],
      };
    });

    saveEmployees(employees);
  };

  // ==========================
  // Accept Task
  // ==========================
  const acceptTask = (employeeId, taskIndex) => {
    const employees = userData.employees.map((emp) => {
      if (emp.id !== employeeId) return emp;

      const tasks = [...emp.tasks];

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        newTask: false,
        active: true,
        completed: false,
        failed: false,
      };

      return {
        ...emp,
        tasks,
      };
    });

    saveEmployees(employees);
  };

  // ==========================
  // Complete Task
  // ==========================
  const completeTask = (employeeId, taskIndex) => {
    const employees = userData.employees.map((emp) => {
      if (emp.id !== employeeId) return emp;

      const tasks = [...emp.tasks];

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        newTask: false,
        active: false,
        completed: true,
        failed: false,
      };

      return {
        ...emp,
        tasks,
      };
    });

    saveEmployees(employees);
  };

  // ==========================
  // Failed Task
  // ==========================
  const failedTask = (employeeId, taskIndex) => {
    const employees = userData.employees.map((emp) => {
      if (emp.id !== employeeId) return emp;

      const tasks = [...emp.tasks];

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        newTask: false,
        active: false,
        completed: false,
        failed: true,
      };

      return {
        ...emp,
        tasks,
      };
    });

    saveEmployees(employees);
  };

  // ==========================
  // Delete Task
  // ==========================
  const deleteTask = (employeeId, taskIndex) => {
    const employees = userData.employees.map((emp) => {
      if (emp.id !== employeeId) return emp;

      const tasks = emp.tasks.filter((_, index) => index !== taskIndex);

      return {
        ...emp,
        tasks,
      };
    });

    saveEmployees(employees);
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        createTask,
        acceptTask,
        completeTask,
        failedTask,
        deleteTask,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;