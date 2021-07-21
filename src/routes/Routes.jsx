import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/nobita_home_website" exact component={Home} />
      <Route path="/nobita_home_website/catalog/:slug" component={Product} />
      <Route path="/nobita_home_website/catalog" component={Catalog} />
      <Route path="/nobita_home_website/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
