import { useBreeds } from '../../providers/BreedProvider'

import './SubBreedGallery.scss'
import Icon from '../icon/Icon.jsx';


const SubBreedGallery = () => {
  const {selectedBreed, favorites, setFavorites} = useBreeds()

  if (!selectedBreed) {
    return <></>
  }

  return (
    <div className="sub-breed-gallery">
      <h2>Gallerie Subrassen</h2>
      {selectedBreed.subBreeds.length === 0 ? (
        <div>
          Diese Hunderasse hat keine Subrassen.
        </div>
      ): (
        <div>
          <div className="sub-breed-options">
            {selectedBreed.subBreeds.map(subBreed => {
              return (
                <div className="option">
                  <Icon icon="CheckboxOpen" fill="#004177" />
                  {subBreed}
                </div>
              )
            })}
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

export default SubBreedGallery
