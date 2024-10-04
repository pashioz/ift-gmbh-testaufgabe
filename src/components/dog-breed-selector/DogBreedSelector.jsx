import Dropdown from '../dropdown/Dropdown'

const handleSelect = (id) => {
  console.log(`Selected item with id ${id}`);
};

const DogBreedSelector = ({data = []}) => {
  return (
    <div>
      <Dropdown
        id="person"
        title="Alle Hunderassen"
        data={data}
        onSelect={handleSelect}
      />
    </div>
  )
}

export default DogBreedSelector
