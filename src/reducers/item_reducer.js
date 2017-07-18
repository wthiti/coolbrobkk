import {
  ITEM_AMOUNT_INC,
  ITEM_AMOUNT_DEC
} from '../actions/types';

const defaultState = {
  items: [
    {
      title: 'PRODUCT_1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum accumsan est convallis varius. In mattis nec lorem ut vulputate. Praesent at orci in leo pharetra ornare. Nullam sodales ligula vel dui varius sodales. Sed lobortis sem leo, sit amet faucibus velit posuere vitae. Mauris accumsan turpis vel lorem maximus feugiat. Vestibulum enim purus, sagittis at nisl et, efficitur pulvinar elit. Nunc massa diam, semper eget dui eu, pulvinar hendrerit felis.',
      img: 'IMG_1',
      amount: 0
    },
    {
      title: 'PRODUCT_2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum accumsan est convallis varius. In mattis nec lorem ut vulputate. Praesent at orci in leo pharetra ornare. Nullam sodales ligula vel dui varius sodales. Sed lobortis sem leo, sit amet faucibus velit posuere vitae. Mauris accumsan turpis vel lorem maximus feugiat. Vestibulum enim purus, sagittis at nisl et, efficitur pulvinar elit. Nunc massa diam, semper eget dui eu, pulvinar hendrerit felis.',
      img: 'IMG_2',
      amount: 0
    }
  ]
}

function calculateNewItemAmount(prevAmount, op){
  const newAmount = prevAmount + op>=0 ? prevAmount + op: 0;
  return newAmount;
}

export default function(state = defaultState, action) {
  let itemIndex;
  let items;
  switch (action.type) {
    case ITEM_AMOUNT_INC:
      itemIndex = action.payload.itemIndex;
      items = state.items;
      items[itemIndex].amount = calculateNewItemAmount(state.items[itemIndex].amount, 1);
      return {...state, items };
    case ITEM_AMOUNT_DEC:
      itemIndex = action.payload.itemIndex;
      items = state.items;
      state.items[itemIndex].amount = calculateNewItemAmount(state.items[itemIndex].amount, -1);
      return {...state, items};
    default:
      return state;
  }
}
