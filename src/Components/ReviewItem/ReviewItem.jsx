import React from 'react';
import './ReviewItem.css';
import { FaTrashAlt } from 'react-icons/fa';
const ReviewItem = ({ product }) => {
    console.log(product)
    const { img, shipping, price, name } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-titile'>{name}</p>
                <p>Price: <span className='text-oranage'>${price}</span></p>
                <p>Shipping: ${shipping}</p>
            </div>
            <div>
                <button className='btn-delete'><FaTrashAlt className='delete'></FaTrashAlt></button>
            </div>
        </div>
    );
};

export default ReviewItem;