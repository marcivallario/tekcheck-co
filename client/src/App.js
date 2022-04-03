import Home from "./components/Home";

import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/global.css"

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

  return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

export default App;