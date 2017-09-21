import React from 'react';
import Drawer from './../../../node_modules/material-ui/Drawer';
import TextField from './../../../node_modules/material-ui/TextField';
import ContentDone from './../../../node_modules/material-ui/svg-icons/action/done';
import IconButton from '../../components/button';
import closeImg from './../../images/close-icon.png';

const textFieldStyle = {
    color: "#fff",
    backgroundColor: "transparent",
    borderColor: "#fff",
    width: 340
};
const textFieldStyleFocused = {
    color: "#fff",
    borderColor: "#fff",
};

function DrawerRight(props) {
    return (
        <Drawer width={500}
                open={props.openDrawer}
                className="drawer-right"
                openSecondary={true}>
            <div className="title-drawer">Create new project</div>
            <span className="close-drawer control-but" onClick={props.onClose}>
                    <img src={closeImg} alt=""/>
                    ECS
                </span>
            <TextField
                floatingLabelText="Product name"
                multiLine={true}
                rows={1}
                className="drawer-field"
                style={textFieldStyle}
                textareaStyle={textFieldStyle}
                floatingLabelStyle={textFieldStyle}
                floatingLabelFocusStyle={textFieldStyleFocused}
                underlineFocusStyle={textFieldStyleFocused}
            />
            <IconButton
                backgroundColor="#fff"
                className="fixedButton"
                children={<ContentDone />}
            />
        </Drawer>
    );
}

export default DrawerRight;