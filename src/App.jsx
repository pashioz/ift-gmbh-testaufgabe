import { useEffect, useState } from 'react'
import axios from 'axios'

import BreedProvider from './providers/BreedProvider'
import BreedSelector from './components/breed-selector/BreedSelector'
import FavoritesGallery from './components/favorites-gallery/FavoritesGallery'
import SubbreedGallery from './components/subbreed-gallery/SubbreedGallery';

import './App.scss'

const getImageUrl = async (selectedBreed) => {
  return await axios.get('https://dog.ceo/api/breed/hound/afghan/images/random')
    .then(response => {
      console.log(response)
      return response.data.message
    })
}

function App() {
  const [breeds, setBreeds] = useState(undefined)

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        /*
        * Transform the response data into an array of objects
        * structure (to mimic an entity db api structure),
        * this will make it easier work with by being able to reference
        * properties.
        *
        * The sub-breed imageUrl is not fetched at this point
        * that will be done later if and when the user actually
        * selects a particular sub-breed (to facilitate a faster
        * initial load and less API calls due the response structure
        * of the supplied API).
        */
        const respBreeds = response.data.message
        const arr = []

        // iterate the object
        let i = 0
        let j = 0
        for (let name in respBreeds) {
          const subbreeds = []

          // iterate the array
          let k = 0
          const len = respBreeds[name].length;
          while (k < len) {
            subbreeds.push({
              id: j + 1, // id not zero
              name: respBreeds[name][k],
              imageUrl: getImageUrl(respBreeds[name][k]).then(imageUrl => imageUrl)
            });
            j++
            k++
          }

          arr.push({
            id: i + 1, // id not zero
            name,
            subbreeds
          });
          i++
        }

        setBreeds(arr)
      });
  }, [])

  return (
    <BreedProvider apiData={breeds}>
      <main className="app">
        <div>
          <h1>Testaufgabe</h1>
        </div>

        <BreedSelector />

        <SubbreedGallery />

        <FavoritesGallery />
      </main>

      {/*<div>
        <p>test text</p>
        <Icon icon="ArrowDown" />
        <Icon icon="CheckboxDone" />
        <Icon icon="CheckboxOpen" />
        <Icon icon="Delete" />
        <Icon icon="FavoriteFill" />
        <Icon icon="FavoriteOutline" />
      </div>*/}
    </BreedProvider>
  )
}

export default App
