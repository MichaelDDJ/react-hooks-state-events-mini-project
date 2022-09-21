import React, {useState} from "react";

function NewTaskForm({categories, Tasks, setTasks}) {

  const [toDo, setTodo] = useState('')
  const [newCat, setCat] = useState('Code')

  const onTaskFormSubmit = function (event) {
    event.preventDefault()
    setTasks([...Tasks,{text: toDo, category: newCat}])
  }

  
  

  const opts = categories.map((category) => {
    if (category === 'All') {
      return null;
    } else {
      return <option key={category} value={category}>{category}</option>
    }
  })

  

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={toDo} onChange={event => setTodo(event.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={newCat} onChange={event => setCat(event.target.value)}>
          {opts}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
