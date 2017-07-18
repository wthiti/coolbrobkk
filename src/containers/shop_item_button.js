import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShopItemButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemIndex = this.props.itemIndex;

    return (
      <div>
        <span className='btn btn-default' onClick={(e) => this.props.itemAmountDec(itemIndex)}>-</span>
        <span className='item-amount'>{this.props.item.items[itemIndex].amount}</span>
        <span className='btn btn-default' onClick={(e) => this.props.itemAmountInc(itemIndex)}>+</span>
      </div>
    )
  }
}

function mapStateToProps({ item }) {
  return { item };
}

export default connect(mapStateToProps, actions)(ShopItemButton);
