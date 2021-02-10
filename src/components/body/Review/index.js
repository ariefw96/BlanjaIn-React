import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { BigStar, Star } from './../../../assets'
import './../../body/detailProduct/detailProduct.css'
import axios from 'axios'
const url = process.env.REACT_APP_API_BASE_URL

const Review = ({ id, rating }) => {

    const [review, setReview] = useState([])

    const getReview = () => {
        axios.get(url + 'user/getReview/' + id)
            .then(({ data }) => {
                setReview(data.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getReview(id)
    }, [id])

    const oneStar = review.filter(({ rating }) => {
        return rating == 1
    }).length

    const twoStar = review.filter(({ rating }) => {
        return rating == 2
    }).length

    const threeStar = review.filter(({ rating }) => {
        return rating == 3
    }).length

    const fourStar = review.filter(({ rating }) => {
        return rating == 4
    }).length

    const fiveStar = review.filter(({ rating }) => {
        return rating == 5
    }).length

    return (

        <>
            <p className="prdct-revw">Product review</p>
            <div className="ratee">
                <div className="ratee-number">
                    <p className="txt-rating">{rating.toString().substr(0, 3)}<p className="per text-muted">/5</p> </p>
                    <div className="d-flex d-flex justify-content-center">
                        <img src={BigStar} />
                        <img src={BigStar} />
                        <img src={BigStar} />
                        <img src={BigStar} />
                        <img src={BigStar} />
                    </div>
                </div>
                <div className="dtl-rate justify-content-between">
                    <div className="d-flex" style={{ height: '16px' }}>
                        <img src={Star} />
                        <p className="ml-1">5</p>
                        <div className="d-flex flex-row ml-1 justify-content-between w-75">
                            <div className="indicator-active-5"></div>
                            <p className="ml-1">{fiveStar}</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{ height: '16px' }}>
                        <img src={Star} />
                        <p className="ml-1">4</p>
                        <div className="d-flex flex-row ml-1 justify-content-between w-75">
                            <div className="indicator-active-4"></div>
                            <p className="ml-1">{fourStar}</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{ height: '16px' }}>
                        <img src={Star} />
                        <p className="ml-1">3</p>
                        <div className="d-flex flex-row ml-1 justify-content-between w-75">
                            <div className="indicator-active-3"></div>
                            <p className="ml-1">{threeStar}</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{ height: '16px' }}>
                        <img src={Star} />
                        <p className="ml-1">2</p>
                        <div className="d-flex flex-row ml-1 justify-content-between w-75">
                            <div className="indicator-active-2"></div>
                            <p className="ml-1">{twoStar}</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{ height: '16px' }}>
                        <img src={Star} />
                        <p className="ml-1">1</p>
                        <div className="d-flex flex-row ml-1 justify-content-between w-75">
                            <div className="indicator-active-1"></div>
                            <p className="ml-1">{oneStar}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p><strong>{review.length} Review</strong></p>
            {
                review.length > 0 ? (
                    review.map(({ fullname, rating, review, created_at }) => {
                        let starRating;
                        if (rating == 1) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                </div>
                        } else if (rating == 2) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        } else if (rating == 3) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        } else if (rating == 4) {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        } else {
                            starRating =
                                <div className="row">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                        }
                        return (
                            <>
                                <div style={{ width: '100%', height: '20%', borderStyle: 'outset', marginTop: '10px', marginBottom: '10px' }} >
                                    <div className="p-3">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div>
                                                <p style={{ color: 'red' }}>{fullname}</p>
                                            </div>
                                            <div>
                                                <p><strong style={{ color: 'green' }}>{created_at.split('T')[0]}</strong></p>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: '15px' }}>
                                            {starRating}
                                        </div>
                                        <div className="mt-3">
                                            <p>{review}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                ) : (
                        <>
                            <strong>Belum ada Review</strong>
                        </>
                    )
            }
        </>
    )
}
export default Review
