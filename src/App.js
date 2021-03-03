import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Create from './pages/create/Create';
import Navbar from './components/navbar/Navbar';
import WidgetContextProvider from './context/WidgetContext';

function App() {
  return (
    <div>
      <WidgetContextProvider>
        <Navbar />
        <Switch>
          <Route path="/add" component={Create} />
          <Route exact path="/" component={Main} />
        </Switch>
      </WidgetContextProvider>
    </div>
  );
}

export default App;
