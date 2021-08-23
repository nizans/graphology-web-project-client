import React, { useState } from 'react';
import DropDown from 'components/UI/DropDown';
import ArticleForm from '../forms/ArticleForm';
import CouchForm from '../forms/CouchForm';
import VideoForm from '../forms/VideoForm';
const types = ['כתבה', 'על ספת הגרפולוג', 'וידאו'];
const strings = {
  title: 'הוספת תוכן חדש',
  selectType: 'בחר סוג תוכן',
};

const AddContent = () => {
  const [selectedType, setSelectedType] = useState(types[0]);

  return (
    <div className="h-full w-full flex flex-col justify-start items-start">
      <h1 className="_text-bold-dark-7xl">{strings.title}</h1>
      <div className="w-2/12">
        <sub>{strings.selectType}</sub>
        <DropDown
          handleValueChange={e => setSelectedType(e.props.children)}
          buttonClassName="bg-p-brown-light _text-3xl w-full pr-1 px-4"
          hoverClassName="bg-p-brown"
          elementClassName="bg-p-brown _text-3xl w-full pr-1"
          elements={types.map(t => (
            <span>{t}</span>
          ))}
        />
      </div>
      <div className="w-full divide-y-2 divide-p-brown flex flex-col pb-2 pt-1">
        <span></span>
        <span></span>
      </div>
      <div className="mt-4 flex h-full w-full items-center pb-4 flex-wrap">
        {selectedType === types[0] && <ArticleForm />}
        {selectedType === types[1] && <CouchForm />}
        {selectedType === types[2] && <VideoForm />}
      </div>
    </div>
  );
};

export default AddContent;
