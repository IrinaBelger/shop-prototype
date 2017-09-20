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
const Basket = () => (
    <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title product</TableHeaderColumn>
                <TableHeaderColumn>Count</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>ДУХОВКА НЕЗАВИСИМАЯ ЭЛЕКТРИЧЕСКАЯ SAMSUNG NV 70 K 2340 RB/WT</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>9999</TableRowColumn>
                <TableRowColumn>
                    <IconButton>
                        <Delete />
                    </IconButton>
                </TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>ДУХОВКА НЕЗАВИСИМАЯ ЭЛЕКТРИЧЕСКАЯ SAMSUNG NV 70 K 2340 RB/WT</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>9999</TableRowColumn>
                <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>ДУХОВКА НЕЗАВИСИМАЯ ЭЛЕКТРИЧЕСКАЯ SAMSUNG NV 70 K 2340 RB/WT</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>9999</TableRowColumn>
                <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>ДУХОВКА НЕЗАВИСИМАЯ ЭЛЕКТРИЧЕСКАЯ SAMSUNG NV 70 K 2340 RB/WT</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>9999</TableRowColumn>
                <TableRowColumn></TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>ДУХОВКА НЕЗАВИСИМАЯ ЭЛЕКТРИЧЕСКАЯ SAMSUNG NV 70 K 2340 RB/WT</TableRowColumn>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>9999</TableRowColumn>
                <TableRowColumn></TableRowColumn>
            </TableRow>
        </TableBody>
        <TableFooter
            adjustForCheckbox={false}
        >
            <TableRow>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn></TableRowColumn>
                <TableRowColumn>All</TableRowColumn>
                <TableRowColumn>11223366</TableRowColumn>
            </TableRow>
        </TableFooter>
    </Table>
);

export default Basket;