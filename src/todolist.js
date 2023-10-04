import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showList, setShowList] = useState(true);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const formattedTask = newTask + "\n";
      setTasks([...tasks, formattedTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do List</h1>
      <form className="todo-form" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input
          className="task-input"
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          ✔️
        </button>
      </form>
      <button className="toggle-list-button" onClick={() => setShowList(!showList)}>
        {showList ? "Hide List 🙈" : "Show List 🙉"}
      </button>
      {showList && (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li className="task" key={index}>
              {task}
              <button className="remove-button" onClick={() => removeTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
