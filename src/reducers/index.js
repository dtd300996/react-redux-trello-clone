import listsReducer from './listsReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	lists: listsReducer,
});

export default rootReducer;
