import React from "react";
import Task from './Task'

function TaskList({ selectedClass, tasks, handleDelete}) {

  console.log(tasks)
  console.log(document.body.querySelectorAll(".task"))

  const container = tasks.map((task) => {
    return <Task key={task.text+task.category+(tasks.indexOf(task))} category={task.category} text={task.text} handleDelete={handleDelete} />
  })


  console.log(document.body.querySelectorAll(".task"))

  const filteredTasks = container.filter((task) => {
    if (selectedClass === 'All') {
      return container;
    }
    else {
      return task.props.category === selectedClass;
    }
  })

  


  
  return (
    <div className="tasks">
      {filteredTasks}
    </div>
  );



}

export default TaskList;
