import React, {ChangeEvent, useState} from 'react';
import avatarIcon from '../assets/img/avatarIcon.svg'
import s from '../App.module.css';

export const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            date: '01/01/2021',
            rating: 4
        },
        {
            author: 'Max Doodle',
            title: 'Best choice',
            text: 'Various versions have evolved over the years,sometimes by accident,sometimes on purpose(injected humour and the like).',
            date: '05/23/2021',
            rating: 5
        },
    ])
    const [currentReview, setCurrentReview] = useState('')

    const currentReviewHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.currentTarget.value)
        setCurrentReview(e.currentTarget.value)
    }
    const addReviewHandler = () => {
        const newReview = {
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: currentReview,
            date: '05/23/2021',
            rating: 5
        }
        setReviews([newReview, ...reviews])
        setCurrentReview('')
    }
    return (
        <div className={s.review}>
            <h3>Reviews ({reviews.length})</h3>
            <textarea value={currentReview} onChange={currentReviewHandler} placeholder="Provide your text...">{currentReview}</textarea>
            <button onClick={()=>addReviewHandler()}>Send review</button>
            <div>
                {reviews.map((r) => {
                    return (
                        <div className={s.reviewField}>
                            <div className={s.info}>
                                <div className={s.user}>
                                    <img src={avatarIcon} alt="" />
                                    <div className={s.infoBox}>
                                        <p className={s.author}>{r.author}</p>
                                        <p className={s.rating}>{r.rating} Rating</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={s.date}>{r.date}</p>
                                </div>
                            </div>

                            <div className={s.content}>
                                <p className={s.title}>{r.title}</p>
                                <p>{r.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
