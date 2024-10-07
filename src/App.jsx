import { useEffect, useState } from 'react'
import axios from 'axios'

import BreedProvider from './providers/BreedProvider'
import BreedSelector from './components/breed-selector/BreedSelector'
import FavoritesGallery from './components/favorites-gallery/FavoritesGallery'
import SubbreedGallery from './components/subbreed-gallery/SubbreedGallery'
import Title from './components/topography/Title.jsx'

import './App.scss'

const localStorageBreeds = localStorage.getItem('breeds')
const localStorageSelectedBreed = localStorage.getItem('selectedBreed')
const localStorageFavorites = localStorage.getItem('favorites')

function App() {
  const [initialData, setInitialData] = useState(undefined)

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        /*
        * Transform the response data into an array of objects
        * structure (to mimic an entity db api structure),
        * this will make it easier work with by being able to reference
        * properties.
        *
        * Due the response structure of the supplied API,
        * the subbreed imageUrl is not fetched at this point
        * that will be done later if and when the user actually
        * selects a particular breed (to facilitate a faster
        * initial load and less API calls).
        */
        const responseData = response.data.message
        const breeds = []

        // iterate the object
        let i = 0
        let j = 0
        for (let name in responseData) {
          const subbreeds = []

          // iterate the array
          let k = 0
          const len = responseData[name].length;
          while (k < len) {
            subbreeds.push({
              id: j + 1, // id not zero
              name: responseData[name][k],
              imageUrl: null
            });
            j++
            k++
          }

          breeds.push({
            id: i + 1, // id not zero
            name,
            subbreeds
          });
          i++
        }

        setInitialData({
          breeds,
          selectedBreed: localStorageSelectedBreed ? JSON.parse(localStorageSelectedBreed) : undefined,
          favorites: localStorageFavorites ? JSON.parse(localStorageFavorites) : []
        })
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <BreedProvider initialData={initialData}>
      <main className="app">
        <Title title="Testaufgabe" />

        <BreedSelector />

        <SubbreedGallery />

        <FavoritesGallery />
      </main>
    </BreedProvider>
  )
}

export default App
