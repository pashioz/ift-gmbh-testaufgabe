import Dropdown from '../dropdown/Dropdown'
import { useBreeds } from '../../providers/BreedProvider'

import './BreedSelector.scss'

const BreedSelector = () => {
  const {breeds, setSelectedBreed} = useBreeds()

  const handleSelect = (item) => {
    setSelectedBreed(item)
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
