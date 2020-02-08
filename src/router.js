import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loading from "./pages/ui/loading";
import Nomatch from "./pages/noMatch";
export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route path="/admin/ui/loading" component={Loading}></Route>
                  <Route component={Nomatch}></Route>
                </Switch>
              </Admin>
            )}
          ></Route>
          <Route path="/order/detail" component={Login}></Route>
        </App>
      </HashRouter>
    );
  }
}
