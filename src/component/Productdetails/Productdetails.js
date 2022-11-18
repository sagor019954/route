import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Productdetails = () => {
    const singleproduct = useLoaderData();
    console.log(singleproduct);
    return (
        <div>
            <h1>Display phone details    </h1>
        </div>
    );
};

export default Productdetails;