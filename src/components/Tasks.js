// src/components/Tasks.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTasks } from '../services/api';
import '../styles.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks()
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="container">
      <h2>All Tasks</h2>
      <ul >
        {tasks.map((task) => (
          <li key={task.id}>
            <Link className='tasks' to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
