import { useEffect, useState } from 'react';

import Slideshow from '../slideshow/Slideshow.jsx';
import Icon from '../icon/Icon';
import { useBreeds } from '../../providers/BreedProvider'

import './SubbreedGallery.scss'

const SubbreedGallery = () => {
  const {selectedBreed} = useBreeds()
  const [selectedSubbreeds, setSelectedSubbreeds] = useState(selectedBreed?.subbreeds[0] ? [selectedBreed?.subbreeds[0]] : [])

  useEffect(() => {
    setSelectedSubbreeds(selectedBreed?.subbreeds[0] ? [selectedBreed?.subbreeds[0]] : [])
  }, [selectedBreed])

  if (!selectedBreed) {
    return <></>
  }

  const toggleSelection = (subbreed) => {
    const selected = [...selectedSubbreeds]
    if (selectedSubbreeds.includes(subbreed)) {
      const filtered = selected.filter(item => item.id !== subbreed.id)
      setSelectedSubbreeds(filtered)
    } else {
      selected.push(subbreed)
      setSelectedSubbreeds(selected)
    }
  }

  const isSelected = (item) => {
    const found = selectedSubbreeds.find(subbreed => subbreed.id === item.id)
    return !!found
  }

  return (
    <div className="subbreed-gallery">
      <div className="heading">
        <h2>Gallerie Subrassen</h2>
      </div>

      {selectedBreed.subbreeds.length === 0 ? (
        <div>
          Diese Hunderasse hat keine Subrassen.
        </div>
      ) : (
        <div>
          <div className="subbreed-options">
            {selectedBreed.subbreeds.map(subbreed => {
                return (
                  <div key={subbreed.id} className="option" onClick={() => toggleSelection(subbreed)}>
                    {
                      isSelected(subbreed) ? (
                        <Icon icon="CheckboxDone" fill="#004177" />
                      ) : (
                        <Icon icon="CheckboxOpen" fill="#004177" />
                      )
                    }
                    {subbreed.name}
                  </div>
                )
              }
            )}
          </div>

          <Slideshow selectedBreed={selectedBreed} selectedSubbreeds={selectedSubbreeds} />
        </div>
      )}
    </div>
  )
}

export default SubbreedGallery
