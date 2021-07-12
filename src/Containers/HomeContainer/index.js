import React, {useEffect, useState} from 'react'
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
import { db } from '../../firebase'
import LoadingContainer from '../../LoadingContainer'



const Index = () => {
    const [SliderData, setSliderData] = useState([])
    const [Val1, setVal1] = useState(true)
    const [Val2, setVal2] = useState(true)
    const [Val3, setVal3] = useState(true)
    const [FotoData, setFotoData] = useState([])
    const [videoData, setVideoData] = useState([])
    const [LoadingSlider, setLoadingSlider] = useState(true)

    const SetData = () => {
        console.log("render")
        const NewsCollection = db.collection("carrusel")
        NewsCollection.get().then((response) => {
            const NewsDB = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id }
            })
            setSliderData(NewsDB)
            setVal1(false)
        })
        const IFrameData = db.collection("videos")
        IFrameData.get().then((response) => {
            const FrameDB = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id }
            })
            setVideoData(FrameDB)
            setVal2(false)
        })
        const FData = db.collection("img")
        FData.get().then((response) => {
            const IMGdb = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id}
            })
            setFotoData(IMGdb)
            setVal3(false)
            console.log(FotoData)
        })
    }
    useEffect(() => {
        SetData()
    }, [])

    return <>
       {
           (Val1 || Val2 || Val3) ? <LoadingContainer/> : <>
           <div className="Home-init" style={{backgroundImage: `url(${BackGround})` }}>
           <h1>Somos el equipo de waterpolo del CRL</h1>
           <Slider slides={SliderData}/>
       </div>
       <Video videoData={videoData}/>
       <Fotos data={FotoData}/>
       </>
       }
    </>
}

export default Index
