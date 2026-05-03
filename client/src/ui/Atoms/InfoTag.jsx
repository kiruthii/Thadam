import React from 'react'

const InfoTag = ({
    text,
    showDot = true,          
    bgColor = "bg-light",    
    textColor = "text-primary"
}) => {
    return (
        <div className='fs-6'>
            <p
                className={`d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill ${bgColor} ${textColor} fw-medium`}
                style={{ fontFamily: "Poppins, sans-serif" }}
            >
                {showDot && (
                    <span
                        className="bg-primary rounded-circle d-inline-block"
                        style={{ width: "8px", height: "8px" }}
                    ></span>
                )}
                {text}
            </p>
        </div>
    )
}

export default InfoTag