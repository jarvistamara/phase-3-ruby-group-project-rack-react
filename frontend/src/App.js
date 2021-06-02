import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Classrooms from './containers/Classrooms';
import Classroom from './containers/Classroom';
import StudentForm from './containers/Form';

function App() {
  return (
    <Router>
      <Navigation />
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />  
      <Route exact path="/classrooms" component={Classrooms} />
      <Route exact path="/classrooms/new" component={StudentForm} />
      <Route path="/classroom/:id" component={Classroom}/> 
      </Switch>
    </div>
  </Router>
  );
}

export default App;
