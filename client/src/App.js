import Home from "./pages/homepage/Home";
import NotFound from "./common/components/NotFound";
import Navigation from "./common/components/Navigation";
import ProtectedRoute from "./common/components/ProtectedRoute";
import PublicRoute from "./common/components/PublicRoute";

import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./state/slices/userSlice";
import { Switch, Route } from "react-router-dom";
import "./app.css"

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  console.log('USER in App.js: ', user)
  if (user.isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="app">
      <Switch>
        <ProtectedRoute exact path="/dashboard" component={Navigation} />
        <PublicRoute exact path="/" component={Home} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  )
}

export default App;