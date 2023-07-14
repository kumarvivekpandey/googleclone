import './App.css'
import Home from './pages/Home';
import './pages/Home.css';

 import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

export default function App() {
  return ( 
    <div className="app">
      
      <Router>
      <Switch>
        <Route path="/search">
        <h1> this is a search page</h1>
        </Route>
        <Route path="/">
       
       <Home />
      </Route>
        
    </Switch>
      </Router>
      
    </div>
  )
}
