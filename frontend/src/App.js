import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
    <div className="App">
      <Switch>
      <Route exact path="/" component={App} />  
      <Route exact path="/students" component={Programs} />
      <Route exact path="/students/new" component={StudentForm} />
      <Route path="/students/:id" component={Program}/> 
      </Switch>
    </div>
  </Router>
  );
}

export default App;
