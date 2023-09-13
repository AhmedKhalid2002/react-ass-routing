import React from 'react'
import ContactStyle from './Contact.module.css'
export default function Contact() {
return (
    <>
        <div className="portfolio">
            <div className="content d-flex flex-column align-items-center">
                <h1 className={`mt-4 ${ContactStyle.color_contact}`}>Contact COMPONENT</h1>
                <div className={` mt-2 ${ContactStyle.star}`}><i className={`fa-solid fa-star fs-5 `}></i></div>
            </div>
            <div className="w-50 m-auto">
                <div className="row my-4">
                    <div className="col-12">
                        <input type="text" className='form-control  m-auto border-top-0 border-start-0 border-end-0' placeholder='userName'/>
                    </div>
                    <div className="col-12">
                        <input type="text" className='form-control  m-auto mt-5 border-top-0 border-start-0 border-end-0' placeholder='userAge'/>
                    </div>
                    <div className="col-12">
                        <input type="text" className='form-control m-auto mt-5 border-top-0 border-start-0 border-end-0' placeholder='userEmail'/>
                    </div>
                    <div className="col-12">
                        <input type="text" className='form-control border-top-0 border-start-0 border-end-0  m-auto mt-5' placeholder='userPassword'/>
                    </div>
                    <div className="col-3">
                        <button className={`${ContactStyle.btn} ${ContactStyle.btn_success} btn mt-4 text-white`}> click</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
