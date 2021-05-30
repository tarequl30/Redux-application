import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CardItems from "./Components/CardItems/CardItems";
import GetNow from "./Components/GetNow/GetNow";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Home from "./Pages/HomePage/Home";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cartProduct" component={CardItems} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/productDetails" >
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute path="/getNow" >
            <GetNow></GetNow>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
