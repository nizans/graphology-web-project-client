import React from 'react';
import { useState, useEffect } from 'react';

const useDomParser = (text, mimetype) => {
  const [str, setStr] = useState('');
  const domparser = new DOMParser();
  useEffect(() => {
    const childs = domparser.parseFromString(text, mimetype).childNodes;
    let temp = '';
    childs.forEach(child => {
      temp += child.innerText;
    });
    setStr(temp);
  }, [text, str, mimetype]);
  return [str, setStr];
};

export default useDomParser;
