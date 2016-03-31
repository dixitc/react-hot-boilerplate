import { combineReducers } from 'redux';

let initState = {
	memory : {
		id:1,
		title:"asdf sadfasd"
	}
}

const testReducer = (state=initState , action) => {
	switch (action.type) {
		case 'DO_SOMETHING':
			console.log("action : do_something is running");
			console.log(state);
			return Object.assign({},state,{memory:{title:"cherry memories"}})

		default:
			return state;

	}
}



const reducer = combineReducers({
state:testReducer
})

export default reducer;
