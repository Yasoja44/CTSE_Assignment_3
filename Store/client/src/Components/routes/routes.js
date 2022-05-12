import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Binuka Routes
import CreateStore from "../forms/Store/createStore";
import EmpViewStore from "../forms/views/empViewStore";
import EditStore from "../forms/Store/editStore";
import CustomerViewStore from "../forms/views/customerViewStore";
import StoreItem from "../forms/views/StoreItem";
// import HomeScreen from "../../screens/HomeScreen";
// import CartScreen from "../../screens/CartScreen";
// import ProductScreen from "../../screens/ProductScreen";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            {/* Binuka Routes */}
            <Route path="/createStore" component={CreateStore} exact />
            <Route path="/viewStore" component={CustomerViewStore} />
            <Route path="/empViewStore" component={EmpViewStore} />
            <Route path="/editStore/:id" component={EditStore} />
            <Route path="/storeItem/:id" component={StoreItem} />
            {/* <Route exact path="/homeStore" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
