// src/components/DepartmentDetail.js
import React, { useEffect, useState } from 'react';
import { getDepartmentById } from '../services/api';
import '../styles.css';

const DepartmentDetail = ({ match }) => {
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const { params } = match;
    getDepartmentById(params.departmentId)
      .then((response) => setDepartment(response.data))
      .catch((error) => console.error('Error fetching department details:', error));
  }, [match]);

  return (
    <div className="container">
      <h2>Department Details</h2>
      {department && (
        <div>
          <h3>{department.name}</h3>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default DepartmentDetail;
