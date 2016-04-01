import { combineReducers } from 'redux';

let initState = {
	memory : {
		id:1,
		title:"asdf sadfasd"
	}
}

let updateTitle = "cherry memories";

const testReducer = (state=initState , action) => {
	switch (action.type) {
		case 'DO_SOMETHING':
			console.log("action : do_something is running");
			console.log(state);
			return Object.assign({},{memory:{title:"cherry memories",id : state.memory.id}})

		default:
			return state;

	}
}



const reducer = combineReducers({
state:testReducer
})

export default reducer;
