import "./styles.css";
import Users from "./Users";
import AddForm from "./AddForm";
import { Route, Switch } from "react-router";
import RouteForm from "./RouteForm";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={RouteForm}></Route>
        <Route path="/AddForm" exact component={AddForm}></Route>
        <Route path="/Users" exact component={Users}></Route>
      </Switch>
    </div>
  );
}
