import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Functions.js';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;