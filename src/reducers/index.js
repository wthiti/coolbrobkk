import { combineReducers } from 'redux';
import content from './content_reducer';
import jumbotron from './jumbotron_reducer';
import item from './item_reducer';

const rootReducer = combineReducers({
  content, jumbotron, item
});

export default rootReducer;
