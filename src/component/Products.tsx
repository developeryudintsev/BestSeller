import React, {useEffect, useState} from 'react';
import rating from '../assets/img/rating.svg'
import cartWhite from '../assets/img/cartWhite.svg'
import arrow from '../assets/img/arrowBack.svg'
import s from '../App.module.css';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

type productType = {
    "_id": string,
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
        "rate": number,
        "count": number
    },
    "createdAt": string,
    "updatedAt": string,
}

export const Products = () => {
    const [product, setProduct] = useState<productType|null>(null)
    const [isProductInCart, setIsProductIncart] = useState(false)

    let params=useParams()
    useEffect(() => {
        console.log(params.id)
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${params.id}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
    }, [])

    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }
    return (
        <div>

            {product == null ?
                <div>Заглушка. Понадобится чуть позже. Не удаляейте :)</div>
                :
                <div className={s.product}>
                    <img src={product.image} alt=""/>
                    <div className={s.info}>
                        <p className={s.title}>{product.title}</p>
                        <p className={s.price}>$ {product.price}</p>
                        <div className={s.rating}>
                            <p>Rating: {product.rating.rate}</p>
                            <img src={rating} alt=""/>
                        </div>
                        <div className={s.category}>
                            <span>Category:</span>
                            <p>{product.category}</p>
                        </div>
                        <p className={s.description}>{product.description}</p>
                        <button>
                            <img src={cartWhite} alt=""/>
                            Add to cart
                        </button>
                        <p></p>
                        <button onClick={addProductToCartHandler} >
                            <img src={cartWhite} alt="" />
                            {isProductInCart ? 'Go to cart' : 'Add to cart'}
                        </button>
                        <div className={s.arrowBack}>
                            <Link to={"/"}>
                                <img src={arrow} alt="arrow" className={s.img} />
                                Back to Best Seller
                            </Link>
                        </div>

                    </div>
                    </div>

            }
        </div>
    );
};