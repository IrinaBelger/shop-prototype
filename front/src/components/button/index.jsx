import React from 'react';
import FloatingActionButton from './../../../node_modules/material-ui/FloatingActionButton';
import ContentAdd from './../../../node_modules/material-ui/svg-icons/content/add';

function IconButton() {
    return (
        <FloatingActionButton
            backgroundColor="#2BB2AC"
            className="fixedButton" >
            <ContentAdd />
        </FloatingActionButton>
    );
}

export default IconButton;