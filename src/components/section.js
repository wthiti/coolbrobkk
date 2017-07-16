import React from "react";
import { Component } from "react";

export default class Section extends Component {
  render() {
    return(
      <div className="section row">
        <div className="content-display col-xs-12 col-md-12">
          {this.props.children}
        </div>
      </div>
    );
  }
}
