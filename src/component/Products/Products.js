import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>This is Products component {users.length}</h3>
            {
                users.map(user => <Product key={user.id} user={user}></Product>)
            }
        </div>
    );
};

export default Products;