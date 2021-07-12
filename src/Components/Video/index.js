import React, { useEffect,useState } from 'react'
import { db } from '../../firebase'
import Back from "../../img/back.png"

const IFrame = ({src}) => {
    return <iframe src={src} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowFullScreen>
    </iframe>
}

const Index = ({videoData}) => {
    return (
        <div style={{backgroundImage: `url(${Back})`}}>
            <h1 style={{marginTop:"50px"}}>Videos</h1>
           <div className="videosDiv">
           {videoData.map((param, idx) => {
               return(
                <article key={idx} className="videoFrame">
                    <IFrame src={param.src}/>
                    <h2>{param.titulo}</h2>
                </article>
            ) 
            })}
           </div>
        </div>
    )
}

export default Index
