import React, {Component} from 'react';
import { connect } from 'react-redux';

import ShopItem from './shop_item'

class Shop extends Component {
  constructor(props) {
    super(props);
  }

  renderItem() {
    return this.props.item.items.map((e,index) => (
      <div className='col-xs-12 col-md-6 shop-item' key={e.title}>
        <ShopItem title={e.title} img={e.img} description={e.description} itemIndex={index} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h3 className='text-center'><u>Our Product</u></h3>
        <br />
        {this.renderItem()}
        <div className='text-center'>
          <p className='btn btn-primary disabled'>Now Brewing...</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ item }) {
 return { item };
}

export default connect(mapStateToProps)(Shop);
