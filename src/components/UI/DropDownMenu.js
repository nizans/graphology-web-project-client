import useDimensions from 'hooks/useDimensions';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import Arrow from '../../assets/icons/down_arrow.png';

const DropDownMenu = props => {
  const {
    values = [],
    title = false,
    handleChange = () => {},
    ulClassName,
    itemClassName,
    asLinks = false,
    ulStyle = { width: '100%' },
    liStyle = { padding: '1rem' },
  } = props;
  const [valsArray, setValsArray] = useState(values);
  const [show, setShow] = useState(false);
  const [ref, dim] = useDimensions();
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (title && isFirst) values.unshift(title);
    if (valsArray.includes(title) && !isFirst) {
      const arr = valsArray.filter(v => v != title);
      setValsArray(arr);
    }
  }, [title, valsArray]);

  const handleItemClick = val => {
    setValsArray([val, ...valsArray.filter(i => i !== val)]);
    setShow(false);
    setIsFirst(false);
    handleChange(val);
  };

  return (
    <div className="relative" style={{ height: dim?.height, width: '100%' }}>
      <ul
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={`bg-p-brown-light px-4 hover:bg-p-brown-dark rounded-xl ` + ulClassName}
        style={{
          zIndex: 40,
          maxHeight: show ? dim?.height * valsArray.length + 100 : dim?.height,
          overflow: 'hidden',
          position: 'absolute',
          transition: 'max-height 0.3s ',
          ...ulStyle,
        }}>
        {valsArray.map((val, i) => (
          <li
            key={val + i}
            style={{ ...liStyle }}
            ref={i === 0 ? ref : null}
            onClick={() => {
              handleItemClick(val);
            }}>
            {asLinks ? (
              <NavLink
                activeClassName="font-bold"
                to={val.to}
                className={
                  '_text-3xl hover:text-p-blue-dark hover:font-semibold cursor-pointer flex items-center ' +
                  itemClassName
                }>
                {val.name}
                {i === 0 && (
                  <img src={Arrow} className="mr-1" style={{ width: '1em', transform: 'translateY(0.15rem)' }} alt="" />
                )}
              </NavLink>
            ) : (
              <span
                className={
                  '_text-3xl hover:text-p-blue-dark hover:font-semibold cursor-pointer flex items-center ' +
                  itemClassName
                }>
                {val}
                {i === 0 && (
                  <img src={Arrow} className="mr-1" style={{ width: '1em', transform: 'translateY(0.15rem)' }} alt="" />
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
