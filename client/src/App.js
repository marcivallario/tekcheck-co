import Home from "./pages/homepage/Home";
import Dashboard from "./pages/dashboard/Dashboard";

import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css"

function App() {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      } else {
        res.json().then(error => {
          console.clear()
          console.log(error.error)
        })
      }
    })
  }, [])

  if (user) {
    return(
      <div className="app">
        <Dashboard />
      </div>)
  }

  return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home setUser={setUser}/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;