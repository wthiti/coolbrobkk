import React, {Component} from 'react';
import { connect } from 'react-redux';

class JumbotronImage extends Component {
  constructor(props) {
    super(props);
  }

  renderImage() {
    const imageList = this.props.jumbotron.imageList;
    return imageList.map((img) =>
      (
        <div className='col-xs-4 col-md-4' key={img}>
          <img src={img} className='img img-responsive social-img'/>
        </div>
      )
    );
  }

  render() {
    return (
      <div className='row'>
        {this.renderImage()}
      </div>
    );
  }
}

function mapStateToProps({ jumbotron }) {
  return { jumbotron };
}

export default connect(mapStateToProps)(JumbotronImage);
