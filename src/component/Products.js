import { useState, useEffect } from "react"
import React from 'react';
import axios from 'axios';
import '../style/Products.css';
import heart from '../images/heart@2x.jpg';

export default function Products() {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setloading(true);
        axios(
            {
                method: "GET",
                url: "https://fakestoreapi.com/products"
            }
        ).then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(e => console.log(e))
            .finally(() => setloading(false));
    }, [])
    return (

        <div className="product-container">
            {loading && (<div>
                {" "}
                <h1>loading----</h1>
            </div>)}
            {data.map((product) => (
                <div key={product.id} className="card">
                    <div ><img src={product.image} alt="name" /></div>

                    <div className="card-description">
                        <h6>{product.title}</h6>
                        <h6>{`price:${product.price}`}</h6>
                        <img src={heart} class="heart-1"></img>
                    </div>
                </div>

            ))}

        </div>

    )
}
