import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [selectedClass, setSelectedClass] = useState('All')
  
  const [Tasks, setTasks] = useState(TASKS) 


  

  function handleDelete (target) {
    const todo = target.previousSibling.textContent;
    const cat = target.previousSibling.previousSibling.textContent;
    console.log(todo + cat)

    setTasks(Tasks.filter((task) => {
      return (task.text + task.category) !== (todo + cat)
    }))
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
      <NewTaskForm categories={CATEGORIES} Tasks={Tasks} setTasks={setTasks} />
      <TaskList selectedClass={selectedClass} tasks={Tasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
