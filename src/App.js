import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ProductPage from "./Pages/Product";
import ProductListingPage from "./Pages/Products";
import Navbar from "./Components/Layout/Navbar";






export default function BasicExample() {
  return (

    <Router>
      <div>


        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products" index >
            <Products />
          </Route>
          <Route path="/product/:productId">
            <Product productId={1} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <HomePage />;
}

function About() {
  return <AboutPage />;
}

function Products() {
  return <ProductListingPage />;
}

function Product() {
  return <ProductPage />;
}
