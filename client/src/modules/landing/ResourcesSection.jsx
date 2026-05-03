import React from 'react'
import InfoTag from '../../ui/Atoms/InfoTag'
import ProgressSteps from '../../ui/Molecules/ProgressSteps'
import ResourceCard from '../../ui/Molecules/ResourceCard'

const ResourceSection = () => {

  const resourceData = [
    {
      stepheading: "Quick capture",
      text: "Import contacts via CSV, LinkedIn or manual entry in under 3 seconds.",
    },
    {
      stepheading: "Enrich Profile",
      text: "Our engine automatically fetches job titles,news,and funding data",
    },
    {
      stepheading: "Log every meeting",
      text: "Connect your calendar to sync every interaction automatically",
    },
    {
      stepheading: "Close the deal",
      text: "Use deep context to present the right offer at the perfect moment",
    }
  ]

  return (
    <div className='mt-5 p-3 px-5'>
      <div className='d-flex flex-column align-items-center justify-content-center text-center w-100'>
        <InfoTag text="HOW IT WORKS" />
        <h1 className='fw-bold text-dark'>From lead to client in 4 steps</h1>
      </div>
      <div className="container mt-5">
        <ProgressSteps steps={[1, 2, 3, 4]} />
        <div className="row mt-4 text-center">
          {resourceData.map((item, index) => (
            <div className="col-md-3" key={index}>
              <ResourceCard
                stepheading={item.stepheading}
                text={item.text}
              />
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default ResourceSection