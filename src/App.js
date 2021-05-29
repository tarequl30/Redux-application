import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CardItems from "./Components/CardItems/CardItems";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cartProduct" component={CardItems} />
      </Switch>
    </Router>
  );
}

export default App;
