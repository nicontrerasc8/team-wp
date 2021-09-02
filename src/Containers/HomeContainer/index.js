import React, {useEffect, useState} from 'react'
import Slider from '../../Components/ImageSlider'
import BackGround from "../../img/back.png"
import Video from "../../Components/Video"
import Fotos from "../../Components/Fotos"
import { db } from '../../firebase'
import LoadingContainer from '../../LoadingContainer'

const Index = () => {
    const [SliderData, setSliderData] = useState([])
    const [Val1, setVal1] = useState(true)
    const [Val2, setVal2] = useState(true)
    const [Val3, setVal3] = useState(true)
    const [FotoData, setFotoData] = useState([])
    const [Loading, setLoading] = useState(true)
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
            setTimeout(() => {
                setVal1(false)
            }, 3000);
        })
        const IFrameData = db.collection("videos")
        IFrameData.get().then((response) => {
            const FrameDB = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id }
            })
            setVideoData(FrameDB)
            setTimeout(() => {
                setVal2(false)
            }, 3000);
        })
        const FData = db.collection("img")
        FData.get().then((response) => {
            const IMGdb = response.docs.map(element => {
                const id = element.id;
                return {...element.data(), id:id}
            })
            setFotoData(IMGdb)
            setTimeout(() => {
                setVal3(false)
            }, 3000);
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
