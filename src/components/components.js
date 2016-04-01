import React , {PropTypes} from 'react';
import { connect } from 'react-redux';
import doSomething from '../actions/actions';

const Message = ({memory , clickHandler}) => (
	<p style={{color : 'red'}} onClick={() => clickHandler()}>  {memory.title}  </p>
)


Message.propTypes = {
	memory :  PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired,
	clickHandler : PropTypes.func.isRequired
}

//export default Message;



const mapStateToProps = (state) => {
	console.log(state.state.memory);
	return {
		memory: state.state.memory
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickHandler: () => {
			dispatch(doSomething("text"));
		}
	}
}

const SmartMessage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Message) ;

export default SmartMessage;
