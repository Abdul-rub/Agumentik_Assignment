import React from 'react'
import style from "../styles/MengenalDestinize.module.css"
import bajo from "../assets/bajo-4.png"
import contentCard from "../assets/contentCard.png"
import labuanBajo from "../assets/labuanBajo.png"

const MengenalDestinize = () => {
  return (
    <div className={style.container}>
      <section className={style.title}>
        <div>
          <p>MENGENAL DESTINIZE</p>
        </div>
        <div>
          <p className={style.primary}> Lihat semua </p>
        </div>
      </section>

      <h4><li>Galeri Pariwisata & Blog Travel</li></h4>

      <div className={style.flexImages}>
        <div className={style.divImage1}>
          <img className={style.box1} src={bajo} alt="Box 1" />
          <p className={style.dateColor}>26 DECEMBER 2021</p>
          <h6 className={style.h6content}>Tips naik gunung Bromo Biar gak capek cyin 😥😛</h6>
          <h6 className={'simple-text'}>Tips naik gunung Bromo Biar? gak capek cyin</h6>
        </div>

        <div className={style.divImage2}>
          <img className={style.box2} src={contentCard} alt="Box 2" />
        </div>
      </div>
      <div className={style.thirdImage} style={{ backgroundImage: `url(${labuanBajo})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"  }}>
  <div className={style.overlayText}>
    <h6 >Tips meminum air kawah biar lidah melepuh 😁</h6>
  <p >  Lidah melepuh? why not, kawah bukan untuk dilihat kawan.. tapi untuk di minum.. rasakan<br></br>
    kepanasan yang brutal 🔥</p>
  </div>
</div>

    </div>
  )
}

export default MengenalDestinize