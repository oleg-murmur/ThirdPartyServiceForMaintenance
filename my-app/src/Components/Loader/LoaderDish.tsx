import React from 'react'
import slider from '@/styles/loaders/DishLoader.module.css'

const LoaderDish = () => {
    return (
            <div className={slider.loaderContainer}>
                <div className={slider.loader}></div>
            </div>
    )
}

export default LoaderDish
