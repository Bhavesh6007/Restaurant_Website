import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Tesitimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>The food was delicious, the service was friendly and efficient and the atmosphere was great.
            </p>
            <div className='testimonial-section-bottom'>
             <img src={ProfilePic} alt='profile'/>
             <p>
             "The ambiance of this restaurant is simply fantastic! The cozy atmosphere, soft lighting, and elegant decor create the perfect setting for any special occasion."
             </p>
             <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>                
                <AiFillStar/>
                <AiFillStar/>
             </div>
             <h2>Parth Patel</h2>
            </div>
        </div>

    </div>
  )
}

export default Testimonial