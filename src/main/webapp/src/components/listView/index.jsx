import React from 'react';
import {List, ListItem} from './../../../node_modules/material-ui/List';
function ListView(props) {

    const categories = (
        <div>
            <div className="addProject clearfix">
                <span>Category</span>
                <button className="iconButton" onClick={props.onClick}>+</button>
            </div>
            <List>
                <ListItem primaryText="Sent mail" className="active" />
                <ListItem primaryText="Drafts" />
                <ListItem
                    primaryText="Inbox"
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                        <ListItem
                            key={1}
                            primaryText="Starred"
                        />,
                        <ListItem
                            key={2}
                            primaryText="Sent Mail"
                            disabled={true}
                            nestedItems={[
                                <ListItem key={1} primaryText="Drafts" />,
                            ]}
                        />,
                    ]}
                />
            </List>
        </div>
    );

    return (
        <div className="categories">{categories}</div>
    );
}

export default ListView;