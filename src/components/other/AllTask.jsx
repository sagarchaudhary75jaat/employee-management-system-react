import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData, deleteTask } = useContext(AuthContext);

  if (!userData || !userData.employees) {
    return (
      <div className="text-white text-center mt-10 text-xl">
        Loading Employees...
      </div>
    );
  }

  return (
    <div className="bg-[#272727] rounded-xl p-5 mt-8">
      {/* Header */}
      <div className="grid grid-cols-6 bg-red-500 text-white font-semibold rounded p-4 mb-3">
        <h2>Employee</h2>
        <h2>Task</h2>
        <h2 className="text-center">Status</h2>
        <h2 className="text-center">Category</h2>
        <h2 className="text-center">Date</h2>
        <h2 className="text-center">Action</h2>
      </div>

      {/* Employee Tasks */}
      {userData.employees.map((emp) =>
        emp.tasks.length > 0 ? (
          emp.tasks.map((task, index) => (
            <div
              key={`${emp.id}-${index}`}
              className="grid grid-cols-6 items-center border border-emerald-500 rounded p-4 mb-3"
            >
              {/* Employee Name */}
              <h2 className="font-semibold text-lg">
                {emp.firstName}
              </h2>

              {/* Task Title */}
              <h2>{task.taskTitle}</h2>

              {/* Task Status */}
              <div className="text-center">
                {task.newTask && (
                  <span className="text-blue-400 font-semibold">
                    New
                  </span>
                )}

                {task.active && (
                  <span className="text-yellow-400 font-semibold">
                    Active
                  </span>
                )}

                {task.completed && (
                  <span className="text-green-400 font-semibold">
                    Completed
                  </span>
                )}

                {task.failed && (
                  <span className="text-red-500 font-semibold">
                    Failed
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="text-center">
                {task.category}
              </div>

              {/* Date */}
              <div className="text-center">
                {task.taskDate}
              </div>

              {/* Delete Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const confirmDelete = window.confirm(
                      `Delete "${task.taskTitle}"?`
                    );

                    if (confirmDelete) {
                      deleteTask(emp.id, index);
                    }
                  }}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            key={emp.id}
            className="grid grid-cols-6 items-center border border-gray-700 rounded p-4 mb-3"
          >
            <h2 className="font-semibold">{emp.firstName}</h2>

            <h2 className="text-gray-500 col-span-5">
              No Tasks Assigned
            </h2>
          </div>
        )
      )}
    </div>
  );
};

export default AllTask;