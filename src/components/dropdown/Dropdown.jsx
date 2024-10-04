import { useEffect, useRef, useState } from 'react'

import Icon from '../icon/Icon.jsx';
import useOutsideClick from '../../hooks/useOutsideClick'

import './Dropdown.scss'


const Dropdown = ({id, title = 'Select', data = {}, selectedId, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(selectedId ? data?.find((item) => item.id === selectedId): undefined);

  // if(selectedId) {
  //   const item = data?.find((item) => item.id === selectedId)
  // }

  const handleChange = (item) => {
    setSelectedItem(item)
    onSelect && onSelect(item.id)
    setIsOpen(false)
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <div ref={dropdownRef} className="dropdown">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-selector"
      >
        <span>{selectedItem?.name || title}</span>
        <Icon icon="ArrowDown" size="24" fill="#fff" className={isOpen ? 'transform-180' : ''} />
      </button>

      {/* Open */}
      {isOpen && (
        <div aria-label="Dropdown menu" className="dropdown-menu">
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className="dropdown-menu-list"
          >
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={`dropdown-menu-list-item ${selectedItem?.id === item.id ? 'selected' : ''}`}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
