import React from 'react'
import Slider from '../../Components/ImageSlider'
import img1 from "../../Slider-Images/img-1.png"
import img2 from "../../Slider-Images/img-2.png"
import img3 from "../../Slider-Images/img-3.png"
import img4 from "../../Slider-Images/img-4.png"
import img5 from "../../Slider-Images/img-5.png"
import img6 from "../../Slider-Images/img-6.png"

const SliderData = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img4,
    },
    {
        image: img5,
    },
    {
        image: img6,
    },
]

const index = () => {
    return (
        <div className="Home-init">
            <h1>Somos el equipo de waterpolo del CRL</h1>
            <Slider slides={SliderData}/>
        </div>
    )
}

export default index
