import './Image.scss'


const Image = ({ src, alt, title}) => {

  return (
    <div className="image">
      <img
        src={src}
        alt={alt}
        title={title}
      />
    </div>
  )
}

export default Image
