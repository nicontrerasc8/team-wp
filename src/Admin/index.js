import React, { useState, useEffect } from 'react'
import {storage} from "../firebase"
import { db } from '../firebase';
import LoadingContainer from '../LoadingContainer'

const Admin = () => {
    const [Loading, setLoading] = useState(false)
    const [VideoTitle, setVideoTitle] = useState("");
    const [VideoLink, setVideoLink] = useState("");
    const [VideoSRC, setVideoSRC] = useState("")
    const [carruselFile, setcarruselFile] = useState(null);
    const [imgFile, setimgFile] = useState(null)
    const [AvCarFile, setAvCarFile] = useState(false)
    const [AvimgFile, setAvimgFile] = useState(false)
    const CarruselCollection = db.collection("carrusel");
    const VideosCollection = db.collection("videos");
    const IMGCollection = db.collection("img");

    const onImgChange = e => {
        if(e.target.files[0]){
            setimgFile(e.target.files[0])
            setAvimgFile(true)
        }
        else{
            return null
        }
    }
    const onCarChange = e => {
        if(e.target.files[0]){
            setcarruselFile(e.target.files[0])
            setAvCarFile(true)
        }
        else{
            return null
        }
    }

    const onIMGUpload = async() => {
        setLoading(true);
        const storageRef = storage.ref()
        const fileRef = storageRef.child(imgFile.name)
        await fileRef.put(imgFile)
        IMGCollection.add({
            name: imgFile.name,
            url: await fileRef.getDownloadURL()
        }).then(
            setLoading(false)
        )
    }
    const onCarUpload = async() => {
        setLoading(true);
        const storageRef = storage.ref()
        const fileRef = storageRef.child(carruselFile.name)
        await fileRef.put(carruselFile)
        CarruselCollection.add({
            name: carruselFile.name,
            url: await fileRef.getDownloadURL()
        }).then(
            setLoading(false)
        )
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        db.collection("videos").add({
            titulo: VideoTitle,
            src: VideoSRC,
            link: VideoLink,
        })
        setVideoLink("")
        setVideoSRC("")
        setVideoTitle("")
    }

    return <>
    {
        Loading ? <LoadingContainer/> : <div className="admin-div">
        <article>
            <h2>Carrusel de imagenes</h2>
            <input type="file" onChange={onCarChange} size="60px"/>
            <button disabled={setAvCarFile === false} 
            onClick={onCarUpload} 
            className="btn-upload">Subir la imágen</button>
        </article>
        <article>
            <h2>Vídeos</h2>
            <form onSubmit={HandleSubmit}>
                <input autoComplete="off" type="text" placeholder="Título del vídeo" value={VideoTitle} onChange={(e) => setVideoTitle(e.target.value)}/>
                <input autoComplete="off" type="text" placeholder="Source code para visualizarlo" value={VideoSRC} onChange={(e) => setVideoSRC(e.target.value)}/>
                <input autoComplete="off" type="text" placeholder="Link del vídeo en YouTube" value={VideoLink} onChange={(e) => setVideoLink(e.target.value)}/>
                <button type="submit" className="btn-upload">
                    Subir vídeo
                </button>
            </form>
        </article>
        <article>
            <h2>Fotos</h2>
            <input type="file" onChange={onImgChange} size="60px"/>
            <button disabled={setimgFile === false} 
            onClick={onIMGUpload} 
            className="btn-upload">Subir la imágen</button>
        </article>
    </div>
    }
    </>
}

const Index = () => {
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    return <>
    {
        Loading ? <LoadingContainer/> : <Admin/>
    }
    </>
}
export default Index
