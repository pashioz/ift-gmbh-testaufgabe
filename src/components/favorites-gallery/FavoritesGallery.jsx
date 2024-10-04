import { useBreeds } from '../../providers/BreedProvider'

import './FavoritesGallery.scss'


const FavoritesGallery = () => {
  const {favorites, setFavorites} = useBreeds()

  if (favorites.length === 0) {
    return <></>
  }

  return (
    <div>
      <h2>Gallerie Favoriten</h2>
    </div>
  )
}

export default FavoritesGallery
