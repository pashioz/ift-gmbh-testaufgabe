import './Image.scss'


const Image = ({src, alt, title, width = '100%', height = '100%', aspectRatio = '16/9'}) => {

  return (
    <div className="image" style={{width: width, height: height, aspectRatio: aspectRatio}}>
      <img className="img"
        src={src}
        alt={alt}
        title={title}
      />
    </div>
  )
}

export default Image
