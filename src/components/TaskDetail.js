// src/components/TaskDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, deleteTask } from '../services/api';

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getTaskById(taskId)
      .then((response) => setTask(response))
      .catch((error) => console.error('Error fetching task details:', error));
  }, [taskId]);

  const handleDelete = () => {
    deleteTask(taskId)
      .then(() => {
        console.log('Task deleted successfully');
        // Navigate to the tasks list after deletion
        navigate('/tasks');
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div className="container">
      <h2>Task Details</h2>
      {task && (
        <div>
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          {/* Add more details as needed */}
          <button onClick={handleDelete}>Delete Task</button>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
