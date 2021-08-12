import React, { useEffect } from 'react';
import useTextTruncate from '../../helpers/useTextTruncate';

const strings = {
  readMore: 'להמשך קריאה',
};
const ArticleContainer = ({ item }) => {
  const [text, setText] = useTextTruncate(item.text, 20);
  useEffect(() => {
    setText(item.text);
    console.log(text);
  }, []);
  return (
    <div className="flex flex-col">
      <div>
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
      </div>
      <div>
        <img src={item.img} className="object-cover" />
      </div>
      <div>
        <p>{text}</p>
      </div>
      <button>{strings.readMore}</button>
    </div>
  );
};

export default ArticleContainer;
