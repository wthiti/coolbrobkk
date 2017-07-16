import React, {Component} from 'react';
import { connect } from 'react-redux';

class ContentText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className='lead'>
          {this.props.content.content}
        </p>
      </div>
    )
  }
}

function mapStateToProps({ content }) {
  return { content };
}

export default connect(mapStateToProps)(ContentText);
