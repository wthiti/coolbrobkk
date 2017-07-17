import React from "react";
import { Component } from "react";

export default class Section extends Component {
  render() {
    return(
      <div className="section row">
        {this.props.children}
      </div>
    );
  }
}
