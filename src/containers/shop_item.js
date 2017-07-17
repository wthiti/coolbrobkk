import React, {Component} from 'react';

import ShopItemButton from './shop_item_button';

export default class ShopItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='shop-item'>
        ShopItem
        <ShopItemButton />
      </div>
    )
  }
}
