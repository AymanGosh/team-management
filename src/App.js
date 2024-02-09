// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Departments from './components/Departments';
import Employees from './components/Employees';
import Tasks from './components/Tasks';
import EmployeeDetail from './components/EmployeeDetail';
import DepartmentDetail from './components/DepartmentDetail';
import TaskDetail from './components/TaskDetail';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/departments" element={<Departments />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/employee/:employeeId" element={<EmployeeDetail />} />
        <Route path="/department/:departmentId" element={<DepartmentDetail />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
