import React, { useState } from 'react'
import PortfolioStyle from './portfolio.module.css'
import port1 from '../../images/poert1.png'
import port2 from '../../images/port2.png'
import port3 from '../../images/port3.png'
export default function Portfolio() {
    function changeImage(val){
        let inner=document.getElementById('innerImage');
        let overflow=document.getElementById('overflow');
        if(val.classList.value=='show-inner'){
            inner.src=val.parentNode.children[0].src
        }else{
            inner.src=val.parentNode.previousElementSibling.src;
        }
        overflow.classList.add('d-flex');
        overflow.classList.remove('d-none')
    }

    function clear(){
        let overflow=document.getElementById('overflow');
        overflow.classList.remove('d-flex');
        overflow.classList.add('d-none')
    }
  return (
    <>
    <div className="portfolio">
            <div className="content d-flex flex-column align-items-center">
                <h1 className={`mt-4 ${PortfolioStyle.color_portfolio}`}>Portfolio COMPONENT</h1>
                <div className={` mt-2 ${PortfolioStyle.star}`}><i className={`fa-solid fa-star fs-5 `}></i></div>
            </div>
            <div className="container">
                <div className="row g-5 py-4">
                    <div className="col-md-4">
                        <div className="item-portfolio "  >
                            <img src={port1} className='w-100 rounded-3'  alt="port" />
                            <div className="show-inner" onClick={(e)=>changeImage(e.target)}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item-portfolio">
                            <img src={port2} className='w-100 rounded-3'  alt="port" />
                            <div className="show-inner" onClick={(e)=>changeImage(e.target)}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item-portfolio">
                            <img src={port3} className='w-100 rounded-3'  alt="port" />
                            <div className="show-inner" onClick={(e)=>changeImage(e.target)}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item-portfolio">
                            <img src={port3} className='w-100 rounded-3'  alt="port" />
                            <div className="show-inner" onClick={(e)=>changeImage(e.target)}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item-portfolio">
                            <img src={port1} className='w-100 rounded-3'  alt="port" />
                            <div className="show-inner" onClick={(e)=>changeImage(e.target)}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item-portfolio">
                            <img src={port2} className='w-100 rounded-3'  alt="port" />
                            <div className="show-inner" onClick={(e)=>changeImage(e.target)}>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div className={` d-none justify-content-center align-items-center  ${PortfolioStyle.inner}`} id='overflow' onClick={clear}>
        <img src={port2} className='w-50 rounded-2' alt="" id='innerImage'/>
    </div>
    </>
  )
}
