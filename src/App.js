import { Redirect, Link, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Create from './pages/create/Create';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/add" component={Create} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
