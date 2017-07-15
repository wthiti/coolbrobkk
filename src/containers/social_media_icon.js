import React, {Component} from "react";

export default class SocialMediaIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseInsided: false
    };

    this.renderIcon = this.renderIcon.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({mouseInsided: true});
  }

  handleMouseLeave(e) {
    this.setState({mouseInsided: false});
  }

  renderIcon() {
    if (!this.state.mouseInsided) {
      return (<img src={this.props.normalIMGIcon} className="social-media-icon"/>);
    } else {
      return (<img src={this.props.coloredIMGIcon} className="social-media-icon"/>);
    }
  }

  render() {
    return (
      <a href={this.props.socialMediaLink} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.renderIcon()}
      </a>
    )
  }
}
