import React, { useState } from 'react';
import './To_do_list.css';

const To_do_list = () => {
  const [task, Settask] = useState([]);
  const [newTask, Setnewtask] = useState("");

  function handleInputChange(event) {
    Setnewtask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      Settask(t => [...t, newTask]);
      Setnewtask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    Settask(updatedTasks);
  }

  function movetaskUP(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      Settask(updatedTasks);
    }
  }

  function movetaskDown(index) {
    // elemnt already in last we dont move it furter down
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      Settask(updatedTasks);
    }
  }

  return (
    <div className='to-do-list'>
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            <button className='move-button' onClick={() => movetaskUP(index)}>UP</button>
            <button className='move-button' onClick={() => movetaskDown(index)}>DOWN</button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default To_do_list;
