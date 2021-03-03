import React from 'react';
import Create from '../create/Create';
import { Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../../containers/dashboard/Dashboard';

const Main = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default Main;
