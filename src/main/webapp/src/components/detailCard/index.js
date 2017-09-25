import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from './../../../node_modules/material-ui/Card';
import FlatButton from './../../../node_modules/material-ui/FlatButton';
import prodImg from './../../images/3716844.jpg';
const DetailCard = (props) => (
    <Card>
        <div className="detail-card-img">
            <CardMedia
                overlay={<CardTitle  title={props.product.model} subtitle={props.product.price} />}
            >
                <img src={prodImg} alt="" />
            </CardMedia>
        </div>

        <CardTitle title={props.product.model} subtitle={props.product.price} />
        <CardText>
            {props.product.description}
        </CardText>
        <CardActions>
            <FlatButton label="Edit" />
            <FlatButton label="Delete" onClick={() => props.delete()}/>
            <FlatButton label="Bye" onClick={() => props.addProductToBasket()}/>
        </CardActions>
        <div className="clearfix"></div>
    </Card>
);
export default DetailCard;