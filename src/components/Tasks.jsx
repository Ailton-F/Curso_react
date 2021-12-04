import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDelet}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelet={handleTaskDelet}/>
      ))}
    </>
  );
};

export default Tasks;
