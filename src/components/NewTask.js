// src/components/NewTask.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../services/api';

const NewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddTask = () => {
    const newTask = {
      title: title,
      description: description,
      // Add other properties as needed
    };

    addTask(newTask)
      .then(() => {
        console.log('Task added successfully');
        // Navigate to the tasks list after adding a new task
        navigate('/tasks');
      })
      .catch((error) => console.error('Error adding new task:', error));
  };

  return (
    <div className="container">
      <h2>Add New Task</h2>
      <form>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        {/* Add more form fields as needed */}
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
