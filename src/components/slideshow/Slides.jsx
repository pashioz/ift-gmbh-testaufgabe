import './Slides.scss'
import Icon from '../icon/Icon.jsx';
import Image from '../image/Image.jsx';
import { useBreeds } from '../../providers/BreedProvider.jsx';


// const Slides = ({selectedBreed, selectedSubbreeds, slideIndex}) => {
const Slides = ({selectedBreed, subbreed}) => {
  const {isFavorite, addFavorite, removeFavorite} = useBreeds()

  return (
    <div className="slides">
      {
        /*selectedSubbreeds.map((subbreed, index) => {
          const display = (index === slideIndex) ? 'block' : 'none'

          return (
            <div key={index} className="slide fade" style={{display: `${display}`}}>
              <div className="slide-meta">
                {`${selectedBreed.name} (${subbreed.name})`}

                {
                  isFavorite(subbreed) ? (
                    <span title="Favorit entfernen" className="favorite">
                      <Icon icon="FavoriteFill" fill="#8abd24" size={48} onClick={() => removeFavorite(subbreed)} />
                    </span>
                  ): (
                    <span title="Favorit zufügen" className="favorite">
                      <Icon icon="FavoriteOutline" fill="#8abd24" size={48} onClick={() => addFavorite(subbreed)} />
                    </span>
                  )
                }
              </div>
              <Image
                src={subbreed.imageUrl}
                alt={`${selectedBreed.name} (${subbreed.name})`}
                title={`${selectedBreed.name} (${subbreed.name})`}
              />
            </div>
          )
        })*/
        subbreed &&
        (
          <div className="slide fade" style={{display: 'block'}}>
            <div className="slide-meta">
              {`${selectedBreed.name} (${subbreed.name})`}

              {
                isFavorite(subbreed) ? (
                  <span title="Favorit entfernen" className="favorite" onClick={() => removeFavorite(subbreed)}>
                    <Icon icon="FavoriteFill" fill="#8abd24" size={48} />
                  </span>
                ) : (
                  <span title="Favorit zufügen" className="favorite" onClick={() => addFavorite(subbreed)}>
                    <Icon icon="FavoriteOutline" fill="#8abd24" size={48} />
                  </span>
                )
              }
            </div>
            <Image
              src={subbreed.imageUrl}
              alt={`${selectedBreed.name} (${subbreed.name})`}
              title={`${selectedBreed.name} (${subbreed.name})`}
            />
          </div>
        )
      }
    </div>
  )
}

export default Slides
