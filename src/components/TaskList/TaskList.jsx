import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data) return null;

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((task, index) => {
        if (task.active) {
          return (
            <AcceptTask
              key={index}
              task={task}
              taskIndex={index}
              employeeId={data.id}
            />
          );
        }

        if (task.newTask) {
          return (
            <NewTask
              key={index}
              task={task}
              taskIndex={index}
              employeeId={data.id}
            />
          );
        }

        if (task.completed) {
          return (
            <CompleteTask
              key={index}
              task={task}
            />
          );
        }

        if (task.failed) {
          return (
            <FailedTask
              key={index}
              task={task}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;