import React from 'react';
import SearchIcon from 'assets/icons/search.svg';
import { useState } from 'react';
import { useEffect } from 'react';

const strings = {
  search: 'חיפוש',
};
const SearchInput = ({ className, handleSearch }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!value) {
      handleSearch(value);
    }
  }, [value]);

  return (
    <form
      className="relative flex"
      onSubmit={e => {
        e.preventDefault();
        handleSearch(value);
      }}>
      <input
        onInput={e => setValue(e.target.value)}
        value={value}
        placeholder={strings.search}
        className="placeholder-p-gray-dark _text-bold-2xl border-p-blue border-2 rounded-md   pr-8 outline-none"
      />
      <img
        loading="lazy"
        alt=""
        src={SearchIcon}
        style={{
          bottom: '4px',
          right: '5px',
        }}
        className="absolute"
        width="24px"
        height="24px"
      />
      <label
        style={{
          display: value ? 'block' : 'none',
        }}>
        <button>חפש</button>
      </label>
    </form>
  );
};

export default SearchInput;
