import React from 'react'
import FooterStyle from './Footer.module.css'
export default function Footer() {
return (
    <>
    <div className={FooterStyle.footer}>
        <div className="container">
            <div className="row p-5">
                <div className="col-md-4">
                    <div className="item">
                        <h2 className='fs-3 text-white'>LOCATION</h2>
                        <p className='text-white'>2215 John Daniel Drive</p>
                        <p className='text-white'>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item ">
                        <h2 className='fs-3 text-white'>AROUND THE WEB</h2>
                        <ul className={`d-flex justify-content-around  list-unstyled ${FooterStyle.icon_groub}`}>
                            <li className={FooterStyle.li}><i className="fa-brands fa-facebook-f"></i></li>
                            <li className={FooterStyle.li}><i className="fa-brands fa-twitter"></i></li>
                            <li className={FooterStyle.li}><i className="fa-brands fa-linkedin-in"></i></li>
                            <li className={FooterStyle.li}><i className="fa-solid fa-globe"></i></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="item">
                        <h2 className='fs-3 text-white'>ABOUT FREELANCER</h2>
                        <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${FooterStyle.capy} p-3 text-center`}>
                <p className='text-white '>Copyright © Your Website 2021</p>
        </div>
    </div>
    </>
)
}
