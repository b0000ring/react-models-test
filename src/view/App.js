import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route,  Redirect, Switch } from "react-router-dom";

import store from 'store'

import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'
import ViewTodo from './pages/ViewTodo'
import Todos from './pages/Todos'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/add" exact component={AddTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/view/:id" component={ViewTodo} />
          <Route path="/all" exact component={Todos} />
          <Redirect to="/all" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
