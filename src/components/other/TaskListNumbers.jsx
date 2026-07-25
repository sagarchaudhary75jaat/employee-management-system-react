import React from "react";

const TaskListNumbers = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex justify-between gap-5 mt-10">

      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">
          {data.taskCounts.newTask}
        </h2>

        <h3 className="text-xl font-medium">
          New Task
        </h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">
          {data.taskCounts.active}
        </h2>

        <h3 className="text-xl font-medium">
          Active Task
        </h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">
          {data.taskCounts.completed}
        </h2>

        <h3 className="text-xl font-medium">
          Completed
        </h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-bold">
          {data.taskCounts.failed}
        </h2>

        <h3 className="text-xl font-medium">
          Failed
        </h3>
      </div>

    </div>
  );
};

export default TaskListNumbers;