import React from "react";
import {Component} from "react";

import Header from "./header";
import Footer from "./footer";
import Jumbotron from "./jumbotron"
import FollowUs from "./follow_us"
import Section from "./section"

import ContentDisplay from "../containers/content_display"
import LaunchCountDown from "../containers/launch_countdown"
import Shop from "../containers/shop"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Jumbotron/>
        <FollowUs/>
        <Section>
          <ContentDisplay />
        </Section>
        <Section>
          <LaunchCountDown />
        </Section>
        <Section>
          <Shop />
        </Section>
        <Footer/>
      </div>
    );
  }
}
