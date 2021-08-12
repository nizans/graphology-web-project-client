import React, { useRef, useState, useEffect } from 'react';

const DropDown = ({
  headTitle = null,
  elements,
  handleValueChange = null,
  buttonClassName,
  elementClassName,
}) => {
  const [selectedValue, setSelectedValue] = useState(elements[0]);

  const handleItemClick = (i) => {
    if (headTitle) headTitle = null;
    setSelectedValue(elements[i]);
    dropdownRef.current.style.display = 'none';
    if (handleValueChange) handleValueChange(elements[i]);
  };

  const dropdownRef = useRef(null);

  const handleHover = (e) => {
    if (e.type === 'mouseenter') {
      dropdownRef.current.style.display = 'block';
    } else {
      dropdownRef.current.style.display = 'none';
    }
  };

  useEffect(() => {
    console.log(dropdownRef.current.firstChild.classList.add('rounded-t'));
  }, []);

  return (
    <div
      className="inline-block relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        width: 'fit-content',
      }}
    >
      <div
        className={
          buttonClassName +
          ' py-2 px-2 rounded inline-flex justify-center items-center'
        }
      >
        {headTitle ? selectedValue : selectedValue}
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </div>
      <ul ref={dropdownRef} className="absolute hidden pt-1 right-0 left-0">
        {elements.map((el, i) => {
          if (el !== selectedValue)
            return (
              <li
                className={`${
                  i === elements.length - 1 ? 'rounded-b' : ''
                } p-0 whitespace-no-wrap ${
                  elementClassName ? elementClassName : ''
                }`}
                onClick={() => handleItemClick(i)}
                key={i}
              >
                {el}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
