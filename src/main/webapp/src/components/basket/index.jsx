import React from 'react';
import { Link } from 'react-router-dom'

function Basket(props) {
    return (
        <div className="basket">
            <Link to='/basket'>Basket</Link>
        </div>

    );
}
export default Basket;