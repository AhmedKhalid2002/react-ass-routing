import React from 'react'
import AboutStyle from './About.module.css'
export default function About() {
return (
    <>
        <div className={`${AboutStyle.about} d-flex justify-content-center align-items-center`}>
            <div className="content d-flex flex-column align-items-center">
                <h1 className='text-white mt-2'>ABOUT COMPONENT</h1>
                <div className={` mt-2 ${AboutStyle.star}`}><i className={`fa-solid fa-star fs-5 text-white `}></i></div>
                <div className="row w-75">
                    <div className="col-md-6">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
