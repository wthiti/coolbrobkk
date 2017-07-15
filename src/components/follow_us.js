import React from "react";
import {Component} from "react";

import SocialMediaIcon from "../containers/social_media_icon";

export default class FollowUs extends Component {
  render() {
    return (
      <div className="row followus-section">
        <div className="col-xs-12 col-md-12 text-center">
          <span>
            <SocialMediaIcon socialMediaLink="http://www.facebook.com/coolbrobkk" normalIMGIcon="assets/img/facebook.png" coloredIMGIcon="assets/img/facebook-color.png" />
            <SocialMediaIcon socialMediaLink="http://www.instagram.com/coolbrobkk" normalIMGIcon="assets/img/instagram.png" coloredIMGIcon="assets/img/instagram-color.png" />
            <SocialMediaIcon socialMediaLink="https://line.me/R/ti/p/%40ysw8610b" normalIMGIcon="assets/img/line.png" coloredIMGIcon="assets/img/line-color.png" />
            <br/><br/>
            @coolbrobkk
          </span>
        </div>
      </div>
    );
  }
}
