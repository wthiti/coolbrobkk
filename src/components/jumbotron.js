import React from "react";
import { Component } from "react";

import JumbotronImage from "../containers/jumbotron_image"

export default class Jumbotron extends Component {
  render() {
    return(
      <div className="jumbotron">
        <JumbotronImage />
        <h1 className="jumbotron-header-text text-center">Now Brewing...</h1>
      </div>
    );
  }
}
