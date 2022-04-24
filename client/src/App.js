import Home from "./pages/homepage/Home";
import NotFound from "./common/components/NotFound";
import Navigation from "./common/components/Navigation";

import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./state/slices/userSlice";
import { Switch, Route, Redirect } from "react-router-dom";
import "./app.css"

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (user.hasError) {
    return (
      <div className="app">
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    )
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path='/dashboard'>
          <Navigation />
        </Route>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;