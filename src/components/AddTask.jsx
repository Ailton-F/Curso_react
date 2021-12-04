import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTasksAdd}) => {

  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  
  const handleTaskAddClick = ()=>{
    handleTasksAdd(inputData)
    setInputData('')
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
        placeholder="Add task"
      />
      <div className="add-task-button-container">
        <Button onClick={handleTaskAddClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
