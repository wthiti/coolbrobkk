import React from "react";
import {Component} from "react";

import Header from "./header";
import Footer from "./footer";
import Jumbotron from "./jumbotron"
import FollowUs from "./follow_us"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Jumbotron/>
        <FollowUs/>
        <Footer/>
      </div>
    );
  }
}
