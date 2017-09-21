import React from 'react';
import FloatingActionButton from './../../../node_modules/material-ui/FloatingActionButton';
import ContentAdd from './../../../node_modules/material-ui/svg-icons/content/add';

function IconButton(props) {
    return (
        <FloatingActionButton
            children={props.children}
            backgroundColor={props.backgroundColor}
            onClick={props.onClick}
            className="fixedButton" >
        </FloatingActionButton>
    );
}

export default IconButton;