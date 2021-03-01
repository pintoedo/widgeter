import React from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h2>Widgeter</h2>
      <nav className="navbar navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <button>
            <Link to="/add">Create Widget +</Link>
          </button>
        </ul>
      </nav>{' '}
    </div>
  );
};

export default Navbar;
