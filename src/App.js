import React, { Component } from "react";
import Category from "./components/Category";
import Item from "./components/Item";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Category} />
          <Route path="/categories/:category/items" component={Item} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
