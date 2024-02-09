// src/components/Employees.js
import React, { useEffect, useState } from 'react';
import { getAllEmployees } from '../services/api';
import { dummyEmployees } from '../services/dummyData'; // Import dummy data
import '../styles.css';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees()
      .then((response) => setEmployees(response.data))
      .catch(() => setEmployees(dummyEmployees)); // Fallback to dummy data if there's an error
  }, []);

  return (
    <div className="container">
      <h2>All Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
