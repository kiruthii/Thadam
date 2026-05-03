import React, { useEffect, useState } from 'react'
import crmtable from '../../assets/CRM-table-image.jpeg'
import dataimg from '../../assets/Dataimg.png'
import dataimg2 from '../../assets/Dataimg2.png'
import entrytable from '../../assets/EntryTable.webp'
import InfoTag from '../../ui/Atoms/InfoTag'

const SolutionSection = () => {

  const images = [crmtable, dataimg, dataimg2, entrytable]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className='mt-4 w-100 '>
      <div className='d-flex flex-column align-items-center justify-content-center text-center w-100 '>
        <InfoTag text="PRODUCT PREVIEW" />
        <h1 className='fw-bold text-dark'>Your entire pipeline, beautifully organized</h1>
        <InfoTag text="Everything need - contacts, meetings, profiles - in one found workspace"
          showDot={false} textColor='text-secondary' />
        <div className="col-md-6 text-center">
          <img
            key={current}
            src={images[current]}
            alt="crm"
            className="img-fluid w-100 mt-3"
            style={{
              transform: "translate(-60px,60px)",
              animation: "none",
              transition: "all 0.6s ease"
            }}
            onLoad={(e) => {
              e.target.style.transform = "translate(0,0)"
            }}
          />
        </div>
        <div className="d-flex gap-3 flex-wrap">
          <InfoTag text="⚡ avg. 3s entry time" showDot={false} textColor="text-secondary" />
          <InfoTag text="📊 profile scoring" showDot={false} textColor="text-secondary" />
          <InfoTag text="🤝 6 meeting types" showDot={false} textColor="text-secondary" />
        </div>
      </div>

    </div>
  )
}

export default SolutionSection