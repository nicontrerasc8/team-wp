import {useEffect, useState, useRef} from 'react'

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(()=>{
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 4000)
        
        return function (){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

   return <>
          <div className="hero-wrapper">
              {slides && slides.map((slide, idx) => {
                  return(
                      <article className={idx === current ? "slide active" : "slide"} key={idx}>
                        {idx === current &&
                        <img className="hero-image" src={slide.url}/>}
                      </article>
                  )
              })}
          </div>
         {/*  <div className="btn-container">
          <button onClick={prevSlide} className="btn prev"><i className="fas fa-angle-left"></i></button>
          <button onClick={nextSlide} className="btn next"><i className="fas fa-angle-right"></i></button>
          </div> */}
   </>
}

export default Slider

