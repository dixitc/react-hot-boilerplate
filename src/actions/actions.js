//actions types
const DO_SOMETHING = 'DO_SOMETHING';


//action creators

const doSomething = (text) => {
	console.log(text + " that");
    return {
        type: 'DO_SOMETHING',
        text: text + " that"
    }

}

//export action creator and call like dispatch(actionCreator(a,b))
export default doSomething;
