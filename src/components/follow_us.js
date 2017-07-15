import React from "react";
import {Component} from "react";

export default class FollowUs extends Component {
  render() {
    return (
      <div className="row followus-section">
        <div className="col-xs-12 col-md-12 text-center">
          <span>
            <a href="http://www.facebook.com/coolbrobkk"><img src="assets/img/facebook.png" className="social-media-icon"/></a>
            <a href="http://www.instagram.com/coolbrobkk"><img src="assets/img/instagram.png" className="social-media-icon"/></a>
            <a href="https://line.me/R/ti/p/%40ysw8610b"><img src="assets/img/line.png" className="social-media-icon"/></a>
            <br/><br/>
            @coolbrobkk
          </span>
        </div>
      </div>
    );
  }
}
