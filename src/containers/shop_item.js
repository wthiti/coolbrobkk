import React, {Component} from 'react';

import ShopItemButton from './shop_item_button';

export default class ShopItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, img, description, itemIndex} = this.props;
    return (
      <div className='row'>
        <div className='col-xs-4 col-md-4 text-center'>
          <h4>{title}</h4>
          {img}
        </div>
        <div className='col-xs-8 col-md-8 text-justify'>
          <div className='text-justify'>
            {description}
          </div>
          <div className='text-center'>
            <ShopItemButton itemIndex={itemIndex} />
          </div>
        </div>
      </div>
    )
  }
}
