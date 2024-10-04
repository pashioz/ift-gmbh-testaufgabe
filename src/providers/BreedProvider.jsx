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
    console.log('BreedProvider apiData', apiData)
    setBreeds(apiData)
  }, [apiData])

  // update localStorage whenever breed data is updated
  useEffect(() => {
    console.log('BreedProvider breeds', breeds)
    localStorage.setItem('breeds', JSON.stringify(breeds))

    console.log('BreedProvider selectedBreed', selectedBreed)
    localStorage.setItem('selectedBreed', JSON.stringify(selectedBreed))

    console.log('BreedProvider favorites', favorites)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [breeds, selectedBreed, favorites])

  // useEffect(() => {
  //   console.log('BreedProvider selectedBreed', selectedBreed)
  //   localStorage.setItem('selectedBreed', JSON.stringify(selectedBreed))
  // }, [selectedBreed])
  //
  // useEffect(() => {
  //   console.log('BreedProvider favorites', favorites)
  //   localStorage.setItem('favorites', JSON.stringify(favorites))
  // }, [favorites])

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
