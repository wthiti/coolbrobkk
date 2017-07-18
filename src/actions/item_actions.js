import {
  ITEM_AMOUNT_INC,
  ITEM_AMOUNT_DEC
} from './types';

export const itemAmountInc = (itemIndex) => {
  const payload = {
    itemIndex
  };
  return {
    type: ITEM_AMOUNT_INC,
    payload: payload
  };
};

export const itemAmountDec = (itemIndex) => {
  const payload = {
    itemIndex
  };
  return {
    type: ITEM_AMOUNT_DEC,
    payload: payload
  };
};
