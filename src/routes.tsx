import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

const routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/list" component={TeacherList} />
      <Route exact path="/form" component={TeacherForm} />
    </Switch>
  </Router>
);

export default routes;
