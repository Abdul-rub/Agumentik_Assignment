import React from 'react'
import style from "../styles/mapSection.module.css"
import Base from "../assets/Base.png"

const MapSection = () => {
  return (
    <div className={style.map_container}>
      <section>
      <h6>CARI TEMPAT WISATA</h6>
        <h3><li>Cari Tempat Wisata Didekatmu</li></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsum sed dignissimos iusto omnis laudantium mollitia aliquid! Earum impedit, iste placeat non culpa quos optio delectus sit reprehenderit aperiam provident inventore voluptatem deleniti, beatae voluptas.</p>
      </section>
      <img className={style.image_container} src={Base} alt="mapImage" />
      <div className={style.content}>
      <div className={style.smallcontent}>
        <h3 className='subtitle-1'>Popular di dekatmu</h3>
        <p className='medium-label'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloribus.</p>
      </div>

      <div  className={style.smallcontent}>
        <h3 className='subtitle-1'>Popular di dekatmu</h3>
        <p  className='medium-label'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloribus.</p>
      </div>

      <div  className={style.smallcontent}>
        <h3 className='subtitle-1'>Popular di dekatmu</h3>
        <p  className='medium-label'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloribus.</p>
      </div>
      </div>
    </div>
  )
}

export default MapSection