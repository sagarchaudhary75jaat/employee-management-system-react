import React from "react";

const FailedTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-600 rounded-xl">
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

      <button className="w-full bg-red-700 mt-5 py-2 rounded">
        Failed
      </button>
    </div>
  );
};

export default FailedTask;