import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableFooter,
    TableRow,
    TableRowColumn,
} from './../../../node_modules/material-ui/Table';
import IconButton from './../../../node_modules/material-ui/IconButton';
import Delete from './../../../node_modules/material-ui/svg-icons/action/delete-forever';
const Basket = (props) => (
    <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title product</TableHeaderColumn>
                <TableHeaderColumn>Count</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {props.items.map((i, c)=>
                <TableRow>
                    <TableRowColumn>{c+1}</TableRowColumn>
                    <TableRowColumn>{i.model}</TableRowColumn>
                    <TableRowColumn>{i.price}</TableRowColumn>
                    <TableRowColumn>{i.description}</TableRowColumn>
                    <TableRowColumn>
                        <IconButton>
                            <Delete />
                        </IconButton>
                    </TableRowColumn>
                </TableRow>
            )}
        </TableBody>
        <TableFooter
            adjustForCheckbox={false}
        >
            <TableRow>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn>All</TableRowColumn>
                <TableRowColumn>{props.cost}</TableRowColumn>
            </TableRow>
        </TableFooter>
    </Table>
);

export default Basket;