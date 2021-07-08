import React from 'react'
import Back from "../../img/back.png"

const IFrameData = [
    {
        link: "https://youtu.be/28FS3yHEzAU",
        src: "https://www.youtube.com/embed/28FS3yHEzAU",
        title: "Partido 19/06/2021",
    },
]

const IFrame = ({src}) => {
    return <iframe src={src} 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen>
    </iframe>
}

const index = () => {
    return (
        <div style={{backgroundImage: `url(${Back})`}}>
            <h1 style={{marginTop:"50px"}}>Videos</h1>
           <div className="videosDiv">
           {IFrameData.map((param, idx) => {
               return(
                <article className="videoFrame">
                    <IFrame key={idx} src={param.src}/>
                    <h2>{param.title}</h2>
                </article>
            ) 
            })}
           </div>
        </div>
    )
}

export default index
