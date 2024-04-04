import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {
const workInfoData =[
    {
        image: PickMeals,
        title:"Pick Meals",
        text:"Pickmeal is a service that helps customers choose restaurants that offer home delivery.",
    },
    {
        image:ChooseMeals,
        title:"Choose How Often",
        text:"ChooseMeals aims to empower users to make healthier, more informed food choices while simplifying the meal planning and cooking process.",
    },
    {
        image:DeliveryMeals,
        title:"Fast Delivery",
        text:"the shipment will get transported to him anywhere between 24 to 72 hours. Delivery by express is the fastest delivery method."
    }
]
    
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it Works</h1>
            <p className='primary-text'>
            Join us in celebrating the joy of food—because a balanced life starts at the table.
            </p>
            </div>
            <div className='work-section-bottom'>
                {workInfoData.map((data) =>(
                    <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt='image'/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                ))}
        </div>
    </div>
  )
}

export default Work