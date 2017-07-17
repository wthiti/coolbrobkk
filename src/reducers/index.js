import { combineReducers } from 'redux';
import content from './content_reducer';
import jumbotron from './jumbotron_reducer';

const rootReducer = combineReducers({
  content, jumbotron
});

export default rootReducer;
