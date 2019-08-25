import React from 'react'
import { BrowserRouter as Router, Route,  Redirect, Switch } from "react-router-dom";

import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'
import Todos from './pages/Todos'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/all" exact component={Todos} />
        <Route path="/add" exact component={AddTodo} />
        <Route path="/edit/:id" component={EditTodo} />
        <Redirect to="/all" />
      </Switch>
    </Router>
  );
}

export default App;
