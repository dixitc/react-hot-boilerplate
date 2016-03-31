import React , {PropTypes} from 'react';

const Message = ({text}) => (
	<p style={{color : 'red'}}> yolo </p>
)

Message.PropTypes = {
	text : PropTypes.string.isRequired
}


export default Message;
