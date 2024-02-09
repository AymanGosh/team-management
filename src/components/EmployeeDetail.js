// src/components/EmployeeDetail.js
import React, { useEffect, useState } from 'react';
import { getEmployeeById } from '../services/api';
import '../styles.css';

const EmployeeDetail = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const { params } = match;
    getEmployeeById(params.employeeId)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error('Error fetching employee details:', error));
  }, [match]);

  return (
    <div className="container">
      <h2>Employee Details</h2>
      {employee && (
        <div>
          <h3>{employee.name}</h3>
          <p>Email: {employee.email}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default EmployeeDetail;
