import { combineReducers } from 'redux';

const testReducer = (state=0 , action) => {
	return state;
}

const reducer = combineReducers({
testReducer
})

export default reducer;
