import React from 'react'
import InfoTag from '../Atoms/InfoTag'


const PricingCard = ({icon,headertext,text}) => {
  return (
    <div className='card shadow-sm p-3 border-1'>
        <div className='card-body'>
        <h1>{icon}</h1>
        <h3 className="fw-bold text-dark" >{headertext}</h3>
        <InfoTag text={text} showDot={false} textColor='text-secondary' bgColor='white'/>
        </div>
    </div>
  )
}

export default PricingCard