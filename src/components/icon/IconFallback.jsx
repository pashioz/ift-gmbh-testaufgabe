const IconFallback = ({size = '24', fill = 'transparent'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="grey">
      <rect width={size} height={size} x="0" y="0" />
    </svg>
  )
}

export default IconFallback
