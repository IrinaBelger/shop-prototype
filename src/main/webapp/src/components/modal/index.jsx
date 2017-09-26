import React from 'react';
import Dialog from './../../../node_modules/material-ui/Dialog';
import FlatButton from './../../../node_modules/material-ui/FlatButton';

const buttonStyles = {
    color: "#6b6b99",
};
const customContentStyle = {
    width: 400,
    maxWidth: 'none',
};

function ModalDialog(props) {
    const actions = [
        <FlatButton
            label="No"
            primary={true}
            rippleColor="#6b6b99"
            labelStyle={buttonStyles}
            onClick={props.handleCloseModal}
        />,
        <FlatButton
            label="Yes"
            primary={true}
            rippleColor="#6b6b99"
            labelStyle={buttonStyles}
            keyboardFocused={true}
            onClick={props.okOption}
        />,
    ];

    return (
        <div>
            <Dialog
                title="Delete dialog"
                actions={actions}
                modal={false}
                contentStyle={customContentStyle}
                open={props.openModal}
                onRequestClose={props.onRequestClose}
                onTouchTap={props.handleCloseModal}
            >
                Are you sure you want to delete project??
            </Dialog>
        </div>
    );
}
export default ModalDialog;