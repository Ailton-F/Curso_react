import React from "react";
import "./Task.css";
import {CgClose} from 'react-icons/cg'

const Task = ({ task, handleTaskClick, handleTaskDelet}) => {
  return (
    <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
      <div className="task-title" onClick={()=> handleTaskClick(task.id)}>
        {task.title}
      </div>
      
      <div className="buttons-container">
        <button onClick={() => handleTaskDelet(task.id)} className="remove-task">
          <CgClose />
        </button>
      </div>
    </div>
  )
  // return <div className="task-container">{task.title}</div>
};

export default Task;
