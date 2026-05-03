import React from 'react'

const ProgressSteps = ({ steps }) => {
  return (
    <div className="container mt-4">
      <div className="row text-center align-items-center">

        {steps.map((step, index) => (
          <div className="col position-relative" key={index}>

            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold mx-auto"
              style={{ width: "40px", height: "40px" }}
            >
              {step}
            </div>

            {index !== steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "50%",
                  width: "100%",
                  borderTop: "2px dotted #6c757d",
                  zIndex: "-1"
                }}
              ></div>
            )}

          </div>
        ))}

      </div>
    </div>
  )
}

export default ProgressSteps