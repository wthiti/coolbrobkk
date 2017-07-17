import React, {Component} from 'react';

import ShopItem from './shop_item'

export default class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6'>
        <ShopItem />
      </div>
    )
  }
}
