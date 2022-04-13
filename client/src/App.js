import Home from "./pages/homepage/Home";
import NotFound from "./common/components/NotFound";
import Navigation from "./common/components/Navigation";

import { Suspense } from 'react';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css"

function App() {
  const [ user, setUser ] = useState(null)
  console.log(user)

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
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route path='/dashboard'>
              <Navigation user={user}/>
            </Route>
            <Route exact path='/'>
              <Home setUser={setUser} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    )
}

export default App;