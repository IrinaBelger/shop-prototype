import React from 'react';
import CardProduct from '../../components/cardProduct';


function Products(props) {
    return (
        <div>
            {props.products.map(p =>
                <CardProduct  key={p.id} product={p}
                              addProductToBasket={ (e) => props.addProductToBasket(e)}/>)}


        </div>
    );
}

export default Products;