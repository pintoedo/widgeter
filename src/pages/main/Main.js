import React from 'react';
import Create from '../create/Create';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from '../../containers/dashboard/Dashboard';

const Main = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Main;
