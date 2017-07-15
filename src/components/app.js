import React from "react";
import {Component} from "react";

import Header from "./header";
import Footer from "./footer";
import Jumbotron from "./jumbotron"
import FollowUs from "./follow_us"
import Content from "./content"
import Shop from "./shop"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Jumbotron/>
        <FollowUs/>
        <Content/>
        <Shop/>
        <Footer/>
      </div>
    );
  }
}
