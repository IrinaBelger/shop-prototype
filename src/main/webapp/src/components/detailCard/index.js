import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from './../../../node_modules/material-ui/Card';
import FlatButton from './../../../node_modules/material-ui/FlatButton';
import prodImg from './../../images/3716844.jpg';
const DetailCard = () => (
    <Card>
        <div className="detail-card-img">
            <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
                <img src={prodImg} alt="" />
            </CardMedia>
        </div>

        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Edit" />
            <FlatButton label="Delete" />
            <FlatButton label="Bye" />
        </CardActions>
        <div className="clearfix"></div>
    </Card>
);
export default DetailCard;