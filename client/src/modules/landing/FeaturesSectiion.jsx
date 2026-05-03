import React from "react"
import crmimage from "../../assets/CRM-home-page.jpeg"
import { motion } from "framer-motion"
import Button from "../../ui/button/Button"
import InfoTag from "../../ui/Atoms/InfoTag"

const VITE_BACKEND_LIVE_BASE_URL = import.meta.env.VITE_BACKEND_LIVE_BASE_URL

const FeaturesSection
 = () => {

    const handleLogin = () => {
        window.location.href = `${VITE_BACKEND_LIVE_BASE_URL}/login`
    }

    return (
        <div className="d-flex align-items-center justify-content-between w-100"
            style={{
                minHeight: "100vh",
                padding: "0 80px",
                background: "linear-gradient(270deg,#eef2ff,#ffffff,#e0f2fe)",
                backgroundSize: "400% 400%",
                animation: "gradientMove 8s ease infinite"
            }}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <InfoTag text="Thadam crm" />
                    <motion.h1
                        className="fw-bold text-dark"
                        style={{ fontFamily: "Poppins, sans-serif", lineHeight: "1.2" }}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Turn Every <br />
                        Customer Interaction <br />
                        into a

                        <span
                            className="fst-italic text-primary fw-medium d-block"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            Growth Opportunity
                        </span>
                    </motion.h1>
                    <p className="text-muted fs-6">
                        Capture contacts in seconds, log meetings with context,
                        and track real relationship - not just records.
                        Thadam CRM helps you convert conversations into closed deals faster</p>
                    <motion.div
                        className="mt-3"
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            className="btn btn-outline-primary btn"
                            onClick={handleLogin}
                            buttonText={<>Get Started <i className="bi bi-arrow-right"></i></>}
                        />
                    </motion.div>
                    <div className="d-flex mt-4 gap-3 flex-wrap">
                        <InfoTag text="⚡ 3-second contact capture" showDot={false} textColor="text-secondary" />
                        <InfoTag text="📲 Smart profile scoring" showDot={false} textColor="text-secondary" />
                        <InfoTag text="🤝 6 meeting types" showDot={false} textColor="text-secondary" />
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <motion.img
                        src={crmimage}
                        alt="crm"
                        className="img-fluid"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection
