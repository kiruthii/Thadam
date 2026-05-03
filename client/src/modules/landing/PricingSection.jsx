import React, { useEffect } from 'react'
import PricingCard from '../../ui/Molecules/PricingCard'


const PricingPage = () => {

    const pricingData = [
        {
            icon: "⚡",
            headertext: "3-second Quick Add",
            text: "stop wasting hours on data entry. Add entire companies with asingle email or domain name."
        },
        {
            icon: "📈",
            headertext: "Meeting Timeline",
            text: "Every handshake zoom call visualized in chronological story. Never lose context again."
        },
        {
            icon: "👤",
            headertext: "Smart Contact Profile",
            text: "Automatic enrichment pulls linkedIn details and company news into your dashboard."
        },
        {
            icon: "🔣",
            headertext: "Live Dashboard",
            text: "Real-time revenue tracking and pipeline health scores updated as you close deals."
        },
        {
            icon: "⬛",
            headertext: "Customizable Table",
            text: "Pivot,filter, and sort your data however you work. It's your CRM, not ours. Built for flexibility."
        }
    ]

    useEffect(() => {
        const cards = document.querySelectorAll(".card-animate")

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1"
                    entry.target.style.transform = "translate(0,0)"
                }
            })
        }, { threshold: 0.2 })

        cards.forEach((card) => observer.observe(card))
    }, [])
    return (
        <div className='mt-4 w-100'
            style={{
                minHeight: "100vh",
                padding: "0 80px",
                background: "linear-gradient(270deg,#eef2ff,#ffffff,#e0f2fe)",
                backgroundSize: "400% 400%",
                animation: "gradientMove 8s ease infinite"
            }}>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <h1 className='fw-bold'>Everything a closer needs</h1>
            </div>
            <div className='d-flex flex-wrap text-start justify-content-center mt-5 gap-4' >
                {pricingData.map((item, index) => (
                    <div key={index}
                        className="col-md-3 mb-3 card-animate"
                        style={{
                            opacity: 0,
                            transform: "translate(-50px,50px)",
                            transition: "all 0.6s ease",
                            transitionDelay: `${index * 0.2}s`
                        }}>
                        <PricingCard
                            icon={item.icon}
                            headertext={item.headertext}
                            text={item.text} />
                    </div>

                ))}

            </div>
        </div>
    )
}

export default PricingPage  