import React from 'react';
import SvgIcon from './../../../node_modules/material-ui/SvgIcon';
import TextField from './../../../node_modules/material-ui/TextField';

const iconStyles = {
    width: 40,
    height: 40,
    color: "#B2B2B2"
};
const textFieldStyle = {
    color: "#B2B2B2",
    borderColor: "#B2B2B2",
    width: 340
};
const textFieldStyleFocused = {
    color: "#38466E",
    borderColor: "#38466E",
};
const SearchIcon = (props) => (
    <SvgIcon onClick={props.onClick} {...props}>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </SvgIcon>
);


function SearchField(props)  {
    return (
        <div className={"search-field " + props.className}>
            <TextField
                style={textFieldStyle}
                hintText="Search..."
                inputStyle={textFieldStyle}
                underlineFocusStyle={textFieldStyleFocused}
            />
        </div>
    )
};
function Search(props) {
    return (
        <div className="search">
            <SearchIcon style={iconStyles}
                        onClick={props.onClick} />
            <SearchField className={props.className}/>
        </div>

    );
}
export default Search;