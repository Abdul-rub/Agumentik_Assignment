import React from 'react'
import "../App.css";
import Dropdown from './Dropdown';
import landingImg from "../assets/landingimg.jpg"
import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.png"
import brand3 from "../assets/brand3.png"
import brand4 from "../assets/brand4.png"
import brand5 from "../assets/brand5.png"
import button from "../assets/Button.png"
import Cart from "../assets/Cart.png"
import Logo from "../assets/Logo.png"
import {Link} from "react-router-dom"

export default function LandingPage() {
  const option = ["option1", "option2", "option3", "option4", "option5", "option6"]
  return (

    <div>
        
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", width: "90%", margin: "auto" }}>
      <img style={{height:"30px"}} src={Logo} alt="logo"/>
        <div style={{ display: 'flex', gap: "5px", width: "100%", margin: "auto" }}>
          <Dropdown options={option} />
          <Dropdown options={option} />
          <Dropdown options={option} />
          <Dropdown options={option} />
          <Dropdown options={option} />
          <Dropdown options={option} />
          <Dropdown options={option} />
        </div>
        <div style={{ display: 'flex',gap:"30px" }}>

          <div style={{ width: "20px", borderRadius: "100%", padding: '10px 12px' }}>
           <img src={Cart} alt="cartButton" />
          </div>
          <div style={{ width: "20px", borderRadius: "100%", padding: '10px 12px' }}>
          <Link to="/about">
          <img src={button} alt='about'/>
          </Link>

          </div>
        </div>
      </div>

      <div style={{ width: "90%", margin: "auto", paddingTop: "10px", display: "flex" }}>
        <div style={{ width: "50%"}}>
          <p style={{ color: "#4F7DF3", background: "#E5EDFF", padding: "0.5rem 1.5rem", width: '50%', borderRadius: "15px" }}>✈ • Explore the wonderful indonesia!</p>

          <h1 style={{ fontSize: "70px", width: '90%', textAlign: "left" }}>Liburan & nikmati
            <span style={{ display: "block", color: "#4F7DF3", fontWeight: "bold" }}> tempat baru di</span>
            <span>indonesia  ️🏝</span>
          </h1>
          <p style={{ color: "#5E6282", width: '50%', textAlign: "left", fontSize: "16px", fontWeight: "500" }}>
            Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨
          </p>

          <div style={{ display: 'flex', gap: "10px", justifyContent: "start", alignItems: 'center', width: "90%" }}>
            <button style={{ padding: "5px 12px", height: "50px", background: "#4475F2", color: "white", border: "none", marginTop: "10px" }}>Mulai sekarang → </button>

            <div style={{ height: '50px' }}>

              <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_67_1157)">
                  <circle cx="45" cy="30" r="25" fill="white" />
                  <circle cx="45" cy="30" r="24.5" stroke="#4475F2" />
                </g>
                <path d="M51.7305 31.4425L40.9132 37.6879L40.9132 25.1971L51.7305 31.4425Z" fill="#4475F2" />
              </svg>

            </div>
            <p>Putar Demo</p>
          </div>
        </div>
        <div>
          <img src={landingImg} alt="landingImg" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: "space-between", width: "70%", margin: "auto", alignItems: "center" }}>
        <div style={{ width: "100px", height: "100px" }} className='brand'>
          <img src={brand1} alt="brand1" style={{ width: "100%", height: "100%", padding: "0px 15px" }} />
        </div>
        <div style={{ width: "100px", height: "100px" }} className='brand'>
          <img src={brand2} alt="brand2" style={{ width: "100%", height: "100%", padding: "0px 15px" }} />
        </div>
        <div style={{ width: "100px", height: "100px" }} className='brand'>
          <img src={brand3} alt="brand3" style={{ width: "100%", height: "100%", padding: "0px 20px" , boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px "}} />
        </div>
        <div style={{ width: "100px", height: "40px" }} className='brand'>
          <img src={brand4} alt="brand4" style={{ width: "100%", height: "100%", padding: "10px 10px" }} />
        </div>
        <div style={{ width: "100px", height: "40px" }} className='brand'>
          <img src={brand5} alt="brand5" style={{ width: "100%", height: "100%", padding: "10px 10px" }} />
        </div>

      </div>
    </div>
  )
}
