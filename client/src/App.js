import Home from "./pages/homepage/Home";
import NotFound from "./common/components/NotFound";
import ProtectedRoute from "./common/components/ProtectedRoute";
import PublicRoute from "./common/components/PublicRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Passengers from "./pages/passengers/Passengers";
import Trips from "./pages/trips/Trips";
import Projects from "./pages/projects/Projects";
import PageLoading from "./common/components/PageLoading";

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

  if (user.isLoading) {
    return (
      <PageLoading />
    )
  }

  return (
    <div className="app">
      <Switch>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/projects" component={Projects} />
        <ProtectedRoute exact path="/trips" component={Trips} />
        <ProtectedRoute exact path="/passengers" component={Passengers} />
        <PublicRoute exact path="/" component={Home} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  )
}

export default App;