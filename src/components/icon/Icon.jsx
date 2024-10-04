import IconArrowDown from './IconArrowDown'
import IconCheckboxDone from './IconCheckboxDone'
import IconCheckboxOpen from './IconCheckboxOpen';
import IconDelete from './IconDelete.jsx';
import IconFallback from './IconFallback'
import IconFavoriteFill from './IconFavoriteFill';
import IconFavoriteOutline from './IconFavoriteOutline';

const Icon = ({icon = 'Fallback', size = '24', fill = 'inherit', className = ''}) => {
  const icons = {
    ArrowDown: IconArrowDown,
    CheckboxDone: IconCheckboxDone,
    CheckboxOpen: IconCheckboxOpen,
    Delete: IconDelete,
    Fallback: IconFallback,
    FavoriteFill: IconFavoriteFill,
    FavoriteOutline: IconFavoriteOutline
  }

  const IconCmp = icons[icon] || icons['Fallback']

  return <IconCmp size={size} fill={fill} className={className} />
}

export default Icon
