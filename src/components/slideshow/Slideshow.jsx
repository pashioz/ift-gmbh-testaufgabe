import Slides from './Slides.jsx';
import { useBreeds } from '../../providers/BreedProvider.jsx';
import { useEffect, useState } from 'react';

import './Slideshow.scss'

const Slideshow = ({selectedBreed, selectedSubbreeds}) => {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    setSlideIndex(0)
  }, [selectedSubbreeds])


  const next = () => {
    if (slideIndex + 1 === selectedSubbreeds.length) {
      setSlideIndex(0)
      return
    }

    setSlideIndex(slideIndex + 1)
  }

  const prev = () => {
    if (slideIndex - 1 < 0) {
      setSlideIndex(selectedSubbreeds.length - 1)
      return
    }

    setSlideIndex(slideIndex - 1)
  }

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {/*<Slides selectedBreed={selectedBreed} selectedSubbreeds={selectedSubbreeds} slideIndex={slideIndex} />*/}
        <Slides selectedBreed={selectedBreed} subbreed={selectedSubbreeds[slideIndex]} />
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
