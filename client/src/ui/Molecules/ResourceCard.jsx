import React from 'react'
import InfoTag from '../Atoms/InfoTag'


const ResourceCard = ({ stepheading,text}) => {
  return (
    <div>
      <h4 className='fw-bold'>{stepheading}</h4>
      <InfoTag  text={text} showDot={false} textColor='text-secondary' bgColor='white'/>
    </div>
  )
}

export default ResourceCard;