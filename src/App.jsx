import React, { useState } from "react";
import "./bootstrap.css";
import "./app.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"

const App = () => {
  // let msg = 'Hello, world!'
  let [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks =  tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAdd = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  const handleTaskDelet = (taskId)=> {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  return (
    <>
      <div className="container container-green">
        <Header />
        <AddTask handleTasksAdd={handleTaskAdd} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelet={handleTaskDelet}/>
      </div>
    </>
  );
};

export default App;
