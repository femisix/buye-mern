import React from 'react';
import Alert from 'react-bootstrap/Alert';

const MessageBox = (props) => {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>; //the varient is "danger because we imported it as a prop from the homescreen"
};

export default MessageBox;
