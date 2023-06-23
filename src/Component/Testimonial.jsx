import React, { useEffect } from 'react'
import style from "../styles/Testimonial.module.css"
import test1 from "../assets/testi1.png"
import test2 from "../assets/testi2.png"
import test3 from "../assets/testi3.png"

const testimonials = [
    {
        id: 1,
        image: test1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam metus quis sagittis malesuada.'
    },
    {
        id: 2,
        image: test2,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam metus quis sagittis malesuada.'
    },
    {
        id: 3,
        image: test3,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam metus quis sagittis malesuada.'
    }
];



const Testimonial = () => {
    

    return (
        <div className={style.testimonial_container}>
            <h6>TESTIMONIAL DESTINIZE</h6>
            <h3><li>Apa Kata Mereka Tentang Kami</li></h3>
            <p className='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in odit nihil, libero fugit praesentium repudiandae,<br></br>
                ducimus dolor suscipit error ut, consequatur alias modi iure!</p>

            {/* ------Testimonial------- */}
            <div className={style.testimonial__container}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={style.testimonial__card}>
                        <div className={style.image__container}>
                            <img src={testimonial.image} alt="Testimonial" className={style.circle__image} />
                        </div>
                        <p className={style.comment}>{testimonial.comment}</p>
                        <div className={style.rating}>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonial