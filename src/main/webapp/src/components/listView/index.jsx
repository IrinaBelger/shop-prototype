import React from 'react';

import {List, ListItem} from './../../../node_modules/material-ui/List';

function ListView(props) {

    const active_type = props.active_type;
    let categoriesList = props.categories===null || props.categories=== undefined? [] : props.categories;
    console.log(props);
    console.log(categoriesList);
    const categories = (
        <div>
            <div className="addProject clearfix">
                <span>Category</span>
                <button className="iconButton" onClick={props.onClick}>+</button>
            </div>
            <List>
                {
                    Object.keys(categoriesList).map((c) =>
                        <ListItem primaryText={c} key={c}
                                  initiallyOpen={false} primaryTogglesNestedList={categoriesList[c].length >0}
                                  nestedItems={categoriesList[c].map(p => <ListItem
                                      onClick={ () => props.selectType(p.id)  }
                                      key={p.id}
                                      primaryText={p.name}
                                  />)}

                        />)
                }
            </List>
        </div>
    );

    return (
        <div className="categories">{categories}</div>
    );
}

export default ListView;