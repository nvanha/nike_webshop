import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/nike_webshop" exact component={Home} />
      <Route path="/nike_webshop/catalog/:slug" component={Product} />
      <Route path="/nike_webshop/catalog" component={Catalog} />
      <Route path="/nike_webshop/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
