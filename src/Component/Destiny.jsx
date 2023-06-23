import React from 'react'
import des1 from "../assets/des1.jpg"
import des2 from "../assets/des2.jpg"
import des3 from "../assets/des3.avif"
function Destiny() {
    return (
        <div style={{ width: "90%", margin: "auto", }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <p style={{ color: "#4475F2" }}>DESTINASI FAVORIT</p>
                    <p style={{ fontSize: "36px" }}><span>✈</span> • Temukan Destinasi Favoritmu  </p>
                </div>
                <div style={{ display: "flex", alignItems: 'center', gap: '10px' }}>
                    <p style={{ color: "#4475F2" }}>Lihat semua </p>
                    <div>
                        <svg width="7" height="10" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.73242 1.9043L6.00004 7.22249L1.73242 12.5407" stroke="#4737FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "30px", margin: "auto" }}>
                <div style={{ width: "23%", height: "55vh", position: "relative" }}>
                    <img src={des1} alt="" srcset="" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
                    <div style={{ position: 'absolute', bottom: "0px", left: "0px", width: "150px", padding: "0px 5px", color: "black", background: "white", opacity: '0.7', textAlign: "center" }}>
                        <p style={{ fontWeight: "bold" }}> Raja Ampat</p>
                        <p style={{ color: "#80918E" }}>Bali</p>
                    </div>
                </div>
                <div style={{ width: "23%", height: "55vh", position: "relative" }}>
                    <img src={des2} alt="" srcset="" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
                    <div style={{ position: 'absolute', bottom: "0px", left: "0px", width: "150px", padding: "0px 5px", color: "black", background: "white", opacity: '0.7', textAlign: "center" }}>
                        <p style={{ fontWeight: "bold" }}> Raja Ampat</p>
                        <p style={{ color: "#80918E" }}>Bali</p>
                    </div>
                </div>
                <div style={{ width: "23%", height: "55vh", position: "relative" }}>
                    <img src={des3} alt="" srcset="" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
                    <div style={{ position: 'absolute', bottom: "0px", left: "0px", width: "150px", padding: "0px 5px", color: "black", background: "white", opacity: '0.7', textAlign: "center" }}>
                        <p style={{ fontWeight: "bold" }}> Raja Ampat</p>
                        <p style={{ color: "#80918E" }}>Bali</p>
                    </div>
                </div>
                <div style={{ width: "23%", height: "55vh", position: "relative" }}>
                    <img src={des1} alt="" srcset="" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />

                    <div style={{ position: 'absolute', bottom: "0px", left: "0px", width: "150px", padding: "0px 5px", color: "black", background: "white", opacity: '0.7', textAlign: "center" }}>
                        <p style={{ fontWeight: "bold" }}> Raja Ampat</p>
                        <p style={{ color: "#80918E" }}>Bali</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Destiny

