import { useBreeds } from '../../providers/BreedProvider'

import './FavoritesGallery.scss'
import Icon from '../icon/Icon.jsx';
import Image from '../image/Image.jsx';


const FavoritesGallery = () => {
  const {selectedBreed, favorites, removeFavorite} = useBreeds()

  if (favorites.length === 0) {
    return <></>
  }

  return (
    <div className="favorites-gallery">
      <div className="heading">
        <h2>Gallerie Favoriten</h2>
      </div>

      <div className="favorites">
        {
          favorites.map(favorite => {
            return (
              <div key={favorite.id} className="favorite">
                <div className="favorite-meta">
                  <span title="Favorit entfernen" className="delete" onClick={() => removeFavorite(favorite)}>
                    <Icon icon="Delete" fill="#e4004e" size={32} />
                  </span>
                </div>
                <Image
                  src={favorite.imageUrl}
                  alt={`${selectedBreed.name} (${favorite.name})`}
                  title={`${selectedBreed.name} (${favorite.name})`}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FavoritesGallery
