import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
  );
}

export default App;