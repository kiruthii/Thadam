import React from 'react'
import ProgressSteps from '../Atoms/ProgressSteps'
import ParagraphTag from '../Atoms/ParagraphTag'

const ResourceCard = ({ stepheading,text}) => {
  return (
    <div>
      <h4 className='fw-bold'>{stepheading}</h4>
      <ParagraphTag text={text} showDot={false} textColor='text-secondary' bgColor='white'/>
    </div>
  )
}

export default ResourceCard