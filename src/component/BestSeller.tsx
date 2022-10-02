import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../App.module.css';


type productsType = [
    {
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
];

export const BestSeller=()=> {
    const [products, setProducts] = useState<Array<productsType>>([])
    let navigate = useNavigate();

    const showMoreHandler = (id:any)=> {
        console.log(id)
        navigate(`${id}`);
    }
    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.ru/api/products")
            .then((res) => {
                const products = res.data;
                setProducts(products)
            });
    }, []);
    return (
        <div className={s.bestSeller}>
            <h1>Best seller</h1>
            <div className={s.cards}>
            {products.map((pr:any) => {
                return (
                    <div className={s.card}>
                        <img src={pr.image} alt="img" />
                        <h4>{pr.title}</h4>
                        <p className={s.price}>${pr.price}</p>
                        <button onClick={() => showMoreHandler(pr.id)}>Show more</button>
                    </div>
                )
            })}
            </div>
        </div>
    );
}
