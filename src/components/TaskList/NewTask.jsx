import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ task, employeeId, taskIndex }) => {
  const { acceptTask } = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {task.category}
        </h3>

        <h4 className="text-sm">{task.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">
        {task.taskTitle}
      </h2>

      <p className="text-sm mt-2">
        {task.taskDescription}
      </p>

      <div className="mt-5">
        <button
          onClick={() => acceptTask(employeeId, taskIndex)}
          className="w-full bg-blue-600 py-2 rounded"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;