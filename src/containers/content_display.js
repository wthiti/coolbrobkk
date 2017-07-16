import React, {Component} from 'react';

import ContentMenu from './content_menu';
import ContentText from './content_text';

export default class ContentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    };
  }

  toggleMenuIconClick() {
    this.setState({showMenu: !this.state.showMenu});
  }

  renderMenu() {
    const divClass = this.state.showMenu ? "col-xs-2 col-md-2" : "col-xs-1 col-md-1";
    const iconClass = this.state.showMenu ? "glyphicon-menu-left" : "glyphicon-menu-right";
    return (
      <div className={divClass}>
        <p className={"btn btn-default side-menu-button glyphicon " + iconClass} onClick={() => this.toggleMenuIconClick()}/>
        {this.state.showMenu ? (<ContentMenu />) : ""}
      </div>
    );
  }

  renderContentText() {
    const divClass = this.state.showMenu ? "col-xs-10 col-md-10" : "col-xs-11 col-md-11";
    return (
      <div className={divClass}>
        <ContentText />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderMenu()}
        {this.renderContentText()}
      </div>
    )
  }
}
