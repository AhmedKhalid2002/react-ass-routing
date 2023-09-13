import React from 'react'
import avatar from '../../images/avataaars.svg';
import HomeStyle from './Home.module.css'
export default function Home() {
    return (
        <>
            <div className={`${HomeStyle.home} d-flex justify-content-center align-items-center`}>
                <div className="content d-flex flex-column align-items-center">
                    <img src={`${avatar} `} className={`w-50`} alt="avatar" />
                    <h1 className='text-white mt-2'>START FRAMEWORK</h1>
                    <div className={` mt-2 ${HomeStyle.star}`}><i className={`fa-solid fa-star fs-5 text-white `}></i></div>
                    <p className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
)
}
