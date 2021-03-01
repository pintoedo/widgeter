import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import Create from '../../pages/create/Create';

const AddButton = () => {
  return (
    <button>
      <Link to="/add">Create new</Link>
      <Switch>
        <Route path="/add" component={Create}></Route>
      </Switch>
    </button>
  );
};

export default AddButton;
