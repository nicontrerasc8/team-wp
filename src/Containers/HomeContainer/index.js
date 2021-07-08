import React from 'react'
import Slider from '../../Components/ImageSlider'
import img1 from "../../Slider-Images/img-1.png"
import img2 from "../../Slider-Images/img-2.png"
import img3 from "../../Slider-Images/img-3.png"
import img4 from "../../Slider-Images/img-4.png"
import img5 from "../../Slider-Images/img-5.png"
import img6 from "../../Slider-Images/img-6.png"
import BackGround from "../../img/back.png"
import Video from "../../Components/Video"
import Fotos from "../../Components/Fotos"
import Yoni from "../../img/fotos/yoni.jpeg"
import Bolo from "../../img/fotos/bolo.jpeg"
import Julio1 from "../../img/fotos/julio.jpeg"
import Julio2 from "../../img/fotos/julio3.jpeg"
import Roco1 from "../../img/fotos/roco.jpeg"
import Roco2 from "../../img/fotos/roco2.jpeg"
import German from "../../img/fotos/german.jpeg"
import Chicas from "../../img/fotos/chicas.jpeg"
import Lonco from "../../img/fotos/lonco.jpeg"
import Pipe from "../../img/fotos/pipe.jpeg"
import tapada from "../../img/fotos/tapada.jpeg"
import Villar from "../../img/fotos/villar.jpeg"

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
        image: Chicas,
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
const FotoData = [
    {
        image: German,
    },
    {
        image: Julio1,
    },
    {
        image: Lonco
    },
    {
        image: Villar,
    },
    {
        image: Roco2,
    },
    {
        image: Yoni,
    },
    {
        image: Julio2,
    },
    {
        image: Roco1,
    },
    {
        image: Pipe,
    },
    {
        image: tapada,
    },
    {
        image: Bolo,
    },

]

const index = () => {
    return <>
        <div className="Home-init" style={{backgroundImage: `url(${BackGround})` }}>
            <h1>Somos el equipo de waterpolo del CRL</h1>
            <Slider slides={SliderData}/>
        </div>
        <Video/>
        <Fotos data={FotoData}/>
    </>
}

export default index
