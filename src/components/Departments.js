// src/components/Departments.js
import React, { useEffect, useState } from 'react';
import { getAllDepartments } from '../services/api';
import { dummyDepartments } from '../services/dummyData'; // Import dummy data
import '../styles.css';

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getAllDepartments()
      .then((response) => setDepartments(response.data))
      .catch(() => setDepartments(dummyDepartments)); // Fallback to dummy data if there's an error
  }, []);

  return (
    <div className="container">
      <h2>All Departments</h2>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>{department.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
