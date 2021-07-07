import {useEffect, useState, useRef} from 'react'
import {Link} from "react-router-dom"

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(()=>{
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 5000)
        
        return function (){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    } 
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

   return <>
          <div className="hero-wrapper">
              {slides.map((slide, idx) => {
                  return(
                      <article className={idx === current ? "slide active" : "slide"} key={idx}>
                        {idx === current &&
                        <img className="hero-image" src={slide.image}/>}
                      </article>
                  )
              })}
          </div>
          <div className="btn-container">
          <button onClick={prevSlide} className="btn prev"><i class="fas fa-angle-left"></i></button>
          <button onClick={nextSlide} className="btn next"><i class="fas fa-angle-right"></i></button>
          </div>
   </>
}

export default Slider

