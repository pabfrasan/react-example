import TaskForm from "./componets/TaskForm";
//importado con imp
import TaskList from "./componets/TaskList";
import { tareas } from "./task";
import React, { useState, useEffect } from "react";

function App() {


  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10" >
      <TaskForm />
      <TaskList  />
      </div>
    </main>
  );
}

export default App;
