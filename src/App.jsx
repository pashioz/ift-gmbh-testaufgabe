import { useEffect, useState } from 'react'
import axios from 'axios'

import BreedProvider from './providers/BreedProvider'
import BreedSelector from './components/breed-selector/BreedSelector'
import FavoritesGallery from './components/favorites-gallery/FavoritesGallery'
import Icon from './components/icon/Icon'
import SubBreedGallery from './components/sub-breed-gallery/SubBreedGallery';

import './App.scss'

function App() {
  const [breeds, setBreeds] = useState(undefined)

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const message = response.data.message
        const arr = []
        let i = 0
        for (let key in message) {
          arr.push({
            id: i,
            name: key,
            subBreeds: message[key]
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

        <SubBreedGallery />

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
