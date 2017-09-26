import React from 'react';

import {List, ListItem} from './../../../node_modules/material-ui/List';

function ListView(props) {

    let categoriesList = props.categories===null || props.categories=== undefined? [] : props.categories;
    const categories = (
        <div>
            <div className="addProject clearfix">
                <span>Category</span>
                <button className="iconButton" onClick={props.onAddCategory}>+</button>
            </div>
            <List>
                {
                    Object.keys(categoriesList).map((c) =>
                            <ListItem primaryText={c} key={c}
                                  initiallyOpen={false} primaryTogglesNestedList={categoriesList[c].length >0}
                                      onClick={() => props.selectCategory(c)}
                                  nestedItems={categoriesList[c].map(p => <ListItem
                                      className={props.active_type.id === p.id ? "active" : "" }
                                      onClick={ () => props.selectType(p.id)  }
                                      key={p.id}
                                      primaryText={p.name}
                                  />
                                  )}

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