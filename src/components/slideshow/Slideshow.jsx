import './Slideshow.scss'
import Image from '../image/Image.jsx';
import { useEffect, useState } from 'react';

const Slideshow = ({selectedBreed, selectedSubbreeds}) => {
  const [slides, setSlides] = useState([])
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    setSlideIndex(0)
  }, [selectedSubbreeds])


  const next = () => {
    if(slideIndex + 1 === selectedSubbreeds.length) {
      setSlideIndex(0)
      return
    }

    setSlideIndex(slideIndex + 1)
  }

  const prev = () => {
    if(slideIndex - 1 < 0) {
      setSlideIndex(selectedSubbreeds.length - 1)
      return
    }

    setSlideIndex(slideIndex - 1)
  }

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        <div className="slideshow-slides">
          {
            selectedSubbreeds.map((subbreed, index) => {
              const display = (index === slideIndex) ? 'block' : 'none'

              return (
                <div key={index} className="slide fade" style={{display: `${display}`}}>
                  <Image
                    src={subbreed.imageUrl}
                    alt={`${selectedBreed.name} (${subbreed.name})`}
                    title={`${selectedBreed.name} (${subbreed.name})`}
                  />
                </div>
              )
            })
          }
        </div>
        {
          (selectedSubbreeds.length > 1) && (
            <div className="slideshow-controls">
              <div className="controls">
                <a className="prev" onClick={() => prev()}>Vorheriges Bild</a>
                <a className="next" onClick={() => next()}>Nächstes Bild</a>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Slideshow
