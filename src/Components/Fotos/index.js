import React,{useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


const Index = ({data}) => {
    useEffect(() => {
        Aos.init({duration : 2000, once:true})
    }, [])
    return (
        <div style={{textAlign:"center", paddingBottom:"3vh"}}>
           <h1>Fotos</h1>
           <div className="img-container">
           {data.map((data, idx) => {
               return <img key={idx} data-aos="fade-right" className="img" src={data.url}/>
           })}
           </div>
           <h2 className="styled-h2">Fotos tomadas por: MN Captions</h2>
           <a className="btn-mnCaptions" target="blank" href="https://www.instagram.com/mn_captions/">Visitar Instagram</a>
        </div>
    )
}

export default Index