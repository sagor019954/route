import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"
const Product = ({ user }) => {
    const { name, username, email, id } = user;

    return (
        <div className='product'>
            <h1>name:{name}</h1>
            <p> username{username}</p>
            <h2>Email:<Link to={`user/${id}`}>{email}</Link></h2>
        </div>
    );
};

export default Product;