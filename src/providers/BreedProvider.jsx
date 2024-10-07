import { useContext, useState, useEffect, createContext } from 'react';

const BreedContext = createContext();

const BreedProvider = ({apiData, children}) => {
  const [breeds, setBreeds] = useState(undefined);
  const [selectedBreed, setSelectedBreed] = useState(undefined);
  const [favorites, setFavorites] = useState([]);
  const value = {
    breeds, setBreeds,
    selectedBreed, setSelectedBreed,
    favorites, setFavorites
  }

  // update the breed data
  useEffect(() => {
    setBreeds(apiData)
  }, [apiData])

  /*
   * Update localStorage whenever breed provider data is updated,
   * this is only to facilitate starting off from where the user left the
   * session
   */
  useEffect(() => {
    localStorage.setItem('breeds', JSON.stringify(breeds))
    localStorage.setItem('selectedBreed', JSON.stringify(selectedBreed))
    // console.log('selectedBreed', selectedBreed)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [breeds, selectedBreed, favorites])

  return (
    <BreedContext.Provider value={value}>
      {children}
    </BreedContext.Provider>
  )
}

export default BreedProvider

export const useBreeds = () => {
  const context = useContext(BreedContext)
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context
}
