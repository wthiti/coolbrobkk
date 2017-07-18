import React, {Component} from 'react';
import { connect } from 'react-redux';

class JumbotronImage extends Component {
  constructor(props) {
    super(props);
  }

  getImgColNumber(length) {
    const maxImgPerRow = 3;
    const row = Math.floor(length / 3) === 0 ? 1 : Math.floor(length / 3 );
    const imgPerRow = Math.floor(length / row);
    return 12 / imgPerRow;
  }

  renderImage() {
    const imageList = this.props.jumbotron.imageList;
    const colNum = this.getImgColNumber(imageList.length);
    return imageList.map((img) =>
      (
        <div className={`col-xs-${colNum} col-md-${colNum}`} key={img}>
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
