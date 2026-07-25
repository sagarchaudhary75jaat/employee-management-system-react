import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ task, employeeId, taskIndex }) => {
  const { completeTask, failedTask } = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-600 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 px-3 py-1 rounded text-sm">
          {task.category}
        </h3>

        <h4>{task.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
        {task.taskTitle}
      </h2>

      <p className="mt-3 text-sm">
        {task.taskDescription}
      </p>

      <div className="flex justify-between mt-5 gap-2">
        <button
          onClick={() => completeTask(employeeId, taskIndex)}
          className="bg-green-600 px-2 py-2 rounded text-sm w-1/2"
        >
          Complete
        </button>

        <button
          onClick={() => failedTask(employeeId, taskIndex)}
          className="bg-red-800 px-2 py-2 rounded text-sm w-1/2"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;