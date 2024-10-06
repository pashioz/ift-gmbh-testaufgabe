import { useBreeds } from '../../providers/BreedProvider'

import './SubbreedGallery.scss'
import Icon from '../icon/Icon.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SubbreedGallery = () => {
  const {selectedBreed, setSelectedBreed, favorites, setFavorites} = useBreeds()
  const [selectedSubbreeds, setSelectedSubbreeds] = useState(selectedBreed?.subbreeds[0] ? [selectedBreed?.subbreeds[0]] : [])

  if (!selectedBreed) {
    return <></>
  }

  /*
   * When the selected breed changes, update the imageUrl for each subbreed
   * and reset the selected subbreeds accordingly
   */
  useEffect(() => {
    setSelectedSubbreeds(selectedBreed?.subbreeds[0] ? [selectedBreed?.subbreeds[0]] : [])
  }, [selectedBreed])

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

  const isSelected = (subbreed) => {
    return selectedSubbreeds.includes(subbreed)
  }

  return (
    <div className="sub-breed-gallery">
      <h2>Gallerie Subrassen</h2>
      {selectedBreed.subbreeds.length === 0 ? (
        <div>
          Diese Hunderasse hat keine Subrassen.
        </div>
      ) : (
        <div>
          <div className="sub-breed-options">
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
                    {subbreed.id} {subbreed.name}
                  </div>
                )
              }
            )}
          </div>
          <div>
            Images
          </div>
        </div>
      )}
      <div>

      </div>
      {selectedBreed.name}
    </div>
  )
}

export default SubbreedGallery
