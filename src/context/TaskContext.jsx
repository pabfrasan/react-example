import React, { createContext, useState, useEffect } from "react";
import { tareas as data } from "../task";


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(titleTask, descripcionTask) {
    setTasks([
      ...tasks,
      { title: titleTask, id: tasks.length, descripcion: descripcionTask },
    ]);
  }
  function deleteTask(idTask) {
    setTasks(tasks.filter((x) => x.id != idTask));
  }
  console.log(tasks)
  useEffect(() => {
    setTasks(data);
  },[]);




  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
