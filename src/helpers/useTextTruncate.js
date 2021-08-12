import React, { useEffect, useState } from 'react';

const defaultOptions = {
  limit: 10,
  ending: '...',
};

const useTextTruncate = (str, options = defaultOptions) => {
  const [text, setText] = useState(str);
  useEffect(() => {
    if (text.length > options.limit) {
      setText(str.substring(0, options.limit));
      console.log(text);
    }
  }, [text]);
  return [text, setText];
};

export default useTextTruncate;
