import './Slides.scss'
import Icon from '../icon/Icon.jsx';
import Image from '../image/Image.jsx';
import { useBreeds } from '../../providers/BreedProvider.jsx';


const Slides = ({selectedBreed, subbreed}) => {
  const {isFavorite, addFavorite, removeFavorite} = useBreeds()

  return (
    <div className="slides">
      {
        subbreed &&
        (
          <div className="slide" style={{display: 'block'}}>
            <div className="slide-meta">
              {`${selectedBreed.name} (${subbreed.name})`}

              {
                isFavorite(subbreed) ? (
                  <span title="Favorit entfernen" className="toggle" onClick={() => removeFavorite(subbreed)}>
                    <Icon icon="FavoriteFill" fill="#8abd24" size={48} />
                  </span>
                ) : (
                  <span title="Favorit zufügen" className="toggle" onClick={() => addFavorite(subbreed)}>
                    <Icon icon="FavoriteOutline" fill="#8abd24" size={48} />
                  </span>
                )
              }
            </div>
            <Image
              src={subbreed.imageUrl}
              alt={`${selectedBreed.name} (${subbreed.name})`}
              title={`${selectedBreed.name} (${subbreed.name})`}
              width="37.5rem"
              height="25rem"
            />
          </div>
        )
      }
    </div>
  )
}

export default Slides
