import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RepoList from "./pages/RepoList";
import GeoAPI from "./pages/GeoAPI";
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Repos" component={RepoList} />
        <Route path="/Pos" component={GeoAPI} />
      </Switch>
    </BrowserRouter>
  );
}
