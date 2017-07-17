import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class ContentMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.content.selectedContent)
      this.props.selectContent('about_us');
  }

  handleLinkOnClick(e,txt) {
    e.preventDefault();
    this.props.selectContent(txt);
  }

  render() {
    const selectedContent = this.props.content.selectedContent;
    return (
      <ul className="nav nav-pills nav-stacked">
        <li className={'text-center ' + (selectedContent === 'about_us' ? 'active': "")} onClick={(e) => this.handleLinkOnClick(e,'about_us')}><a href="#" >About Us</a></li>
        <li className={'text-center ' + (selectedContent === 'our_process' ? 'active': "")} onClick={(e) => this.handleLinkOnClick(e,'our_process')}><a href="#">Our Process</a></li>
        <li className={'text-center ' + (selectedContent === 'sale_location' ? 'active': "")} onClick={(e) => this.handleLinkOnClick(e,'sale_location')}><a href="#">Sale Location</a></li>
        <li className={'text-center ' + (selectedContent === 'contact_us' ? 'active': "")} onClick={(e) => this.handleLinkOnClick(e,'contact_us')}><a href="#">Contact Us</a></li>
      </ul>
    )
  }
}

function mapStateToProps({ content }) {
  return { content };
}

export default connect(mapStateToProps, actions)(ContentMenu);
