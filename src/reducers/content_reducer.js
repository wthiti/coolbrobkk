import {
  CONTENT_SELECT
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CONTENT_SELECT:
      return action.payload;
    default:
      return state;
  }
}
