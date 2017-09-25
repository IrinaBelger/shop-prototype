import React from 'react';
import Drawer from './../../../node_modules/material-ui/Drawer';
import TextField from './../../../node_modules/material-ui/TextField';
import SelectField from './../../../node_modules/material-ui/SelectField';
import MenuItem from './../../../node_modules/material-ui/MenuItem';
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
const selectFieldStyle = {
    color: "#fff",
    backgroundColor: "transparent",
    borderColor: "#fff",
    width: 340
};
const selectFieldStyleFocused = {
    color: "#2bb2ac",
    borderColor: "#fff",
};

function DrawerRight(props) {
    return (
        <Drawer width={500}
                open={props.openDrawer}
                className="drawer-right"
                openSecondary={true}>
            <div className="title-drawer">{props.title}</div>
            <span className="close-drawer control-but" onClick={props.onClose}>
                    <img src={closeImg} alt=""/>
                    ECS
            </span>
            <div>
                {(() => {
                    switch (props.active_type) {
                        case 'ADD_PRODUCT':
                            return <div>
                                <TextField
                                    onChange={(event, value) => props.onChangeModel(event, value)}
                                    floatingLabelText="Model"
                                    multiLine={true}
                                    rows={1}
                                    style={textFieldStyle}
                                    textareaStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                />
                                <TextField
                                    onChange={(event, value) => props.onChangeDescription(event, value)}
                                    floatingLabelText="Description"
                                    multiLine={true}
                                    rows={1}
                                    style={textFieldStyle}
                                    textareaStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                />
                                <TextField
                                    onChange={(event, value) => props.onChangePrice(event, value)}
                                    floatingLabelText="Price"
                                    multiLine={true}
                                    rows={1}
                                    style={textFieldStyle}
                                    textareaStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                />
                                <SelectField
                                    floatingLabelText="Category"
                                    style={textFieldStyle}
                                    selectedMenuItemStyle={selectFieldStyleFocused}
                                    textareaStyle={textFieldStyle}
                                    labelStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                    value={props.selectedCategory.id}
                                    onChange={(event, index, value) => props.onChangeCategory(event, index, value)}>
                                    {props.categoryList.map((c) =>
                                        <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
                                    )}
                                </SelectField>
                                <SelectField
                                    disabled={props.disableType}
                                    floatingLabelText="Type"
                                    style={textFieldStyle}
                                    selectedMenuItemStyle={selectFieldStyleFocused}
                                    textareaStyle={textFieldStyle}
                                    labelStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                    value={props.selectedType.id}
                                    onChange={(event, index, value) => props.onChangeType(event, index, value)}>
                                    {props.types.map((c) =>
                                        <MenuItem value={c.id} key={c.id} primaryText={c.name}/>
                                    )}
                                </SelectField>
                            </div>
                        case 'ADD_CATEGORY':
                            return <div>
                                <TextField
                                    onChange={(event, value) => props.onChangeCategoryName(event, value)}
                                    floatingLabelText="Name"
                                    multiLine={true}
                                    rows={1}
                                    style={textFieldStyle}
                                    textareaStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                />
                                <TextField
                                    onChange={(event, value) => props.onChangeTypesName(event, value)}
                                    floatingLabelText="Types name, use delimeter ',' for array"
                                    multiLine={true}
                                    rows={1}
                                    style={textFieldStyle}
                                    textareaStyle={textFieldStyle}
                                    floatingLabelStyle={textFieldStyle}
                                    floatingLabelFocusStyle={textFieldStyleFocused}
                                    underlineFocusStyle={textFieldStyleFocused}
                                />
                            </div>
                        default :
                            null
                    }
                })()}
            </div>

            <IconButton
                backgroundColor="#fff"
                className="fixedButton"
                onClick={() => props.onSave()}
                children={<ContentDone/>}
            />
        </Drawer>
    );
}

export default DrawerRight;