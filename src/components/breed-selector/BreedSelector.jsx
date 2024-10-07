import Dropdown from '../dropdown/Dropdown'
import axios from 'axios';
import { useBreeds } from '../../providers/BreedProvider'

import './BreedSelector.scss'


const BreedSelector = () => {
  const {breeds, setSelectedBreed} = useBreeds()

  const handleSelect = (breedOption) => {
    const endpoints = []
    breedOption?.subbreeds.map(subbreed => {
      if (!subbreed.imageUrl) {
        endpoints.push(`https://dog.ceo/api/breed/${breedOption.name}/${subbreed.name}/images/random`)
      }
    })

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((...data) => {
        breedOption?.subbreeds.map((subbreed, index) => {
          if (!subbreed.imageUrl) {
            subbreed.imageUrl = data[index].data.message
          }
        })
        setSelectedBreed(breedOption)
      })
    );
  };

  return (
    <div className="breed-selector">
      <h2>Auswahl Hunderasse</h2>
      <Dropdown
        id="person"
        title="Alle Hunderassen"
        data={breeds}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default BreedSelector
