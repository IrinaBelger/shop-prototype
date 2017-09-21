import React from 'react';
import CardProduct from '../../components/cardProduct';


function Products(props) {
    return (
        <div>
            {props.products.map(p =>
                <CardProduct  product={p}/>)}


        </div>
    );
}

export default Products;