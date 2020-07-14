import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
