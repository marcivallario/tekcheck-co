import Home from "./pages/homepage/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./common/components/NotFound";
// import PublicRoute from "./common/components/PublicRoute";
// import PrivateRoute from "./common/components/PrivateRoute";

import { lazy, Suspense } from 'react';
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

//   return (
//       <div className="app">
//         <Suspense fallback={<p>Loading...</p>}>
//           <Switch>
//             <PublicRoute user={user} setUser={setUser} component={Home} path="/" exact />
//             <PrivateRoute user={user} component={Dashboard} path="/dashboard" exact />
//           </Switch>
//         </Suspense>
        
//       </div>
//   );
// }
  if (user) {
    return (
      <div className="app">
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    )
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home setUser={setUser}/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;