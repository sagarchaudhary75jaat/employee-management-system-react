import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { createTask } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
    };

    createTask(assignTo, newTask);

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="mt-7 bg-[#272727] rounded-xl p-5">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap justify-between"
      >
        <div className="w-[45%]">

          <div>
            <h3 className="text-sm mb-2">Task Title</h3>

            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div>
            <h3 className="text-sm mb-2">Date</h3>

            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm mb-2">Assign To</h3>

            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-sm mb-2">Category</h3>

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Design, Dev..."
            />
          </div>

        </div>

        <div className="w-[50%] flex flex-col">

          <h3 className="text-sm mb-2">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 rounded outline-none bg-transparent border border-gray-400 p-2"
          />

          <button className="bg-emerald-500 mt-4 py-3 rounded text-lg">
            Create Task
          </button>

        </div>
      </form>
    </div>
  );
};

export default CreateTask;