import { useEffect, useState } from 'react'
import axios from 'axios'

import DogBreedSelector from './components/dog-breed-selector/DogBreedSelector';
import Icon from './components/icon/Icon'

import './App.scss'

function App() {
  const [breeds, setBreeds] = useState([])

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
    <main className="app">
      <div>
        <h1>Testaufgabe</h1>
      </div>

      <div>
        <h2>Auswahl Hunderasse</h2>
        <DogBreedSelector data={breeds} />
      </div>

      <div>
        <h2>Gallerie Subrassen</h2>
      </div>

      <div>
        <h2>Gallerie Favoriten</h2>
      </div>

      <div>
        <p>test text</p>
        <Icon icon="ArrowDown" />
        <Icon icon="CheckboxDone" />
        <Icon icon="CheckboxOpen" />
        <Icon icon="Delete" />
        <Icon icon="FavoriteFill" />
        <Icon icon="FavoriteOutline" />
      </div>
    </main>
  )
}

export default App
