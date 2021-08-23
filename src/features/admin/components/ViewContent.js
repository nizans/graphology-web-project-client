import React from 'react';
import { NavLink } from 'react-router-dom';
import Table from './Table';

const strings = {
  title: 'תכנים באתר',
  articles: 'כתבות',
  contents: 'תכנים מספת הגרפולוג',
  videos: 'סרטונים',
};
const ViewContent = () => {
  return (
    <div className="w-full h-full">
      <h1 className="_text-bold-dark-8xl">{strings.title}</h1>
      <nav className="flex divide-x-2 divide-p-brown divide-x-reverse mb-2">
        <NavLink className="_text-3xl pl-4" activeClassName="font-bold" to="/admin/articles">
          {strings.articles}
        </NavLink>
        <NavLink className="_text-3xl px-4" activeClassName="font-bold" to="/admin/contents">
          {strings.contents}
        </NavLink>
        <NavLink className="_text-3xl pr-4" activeClassName="font-bold" to="/admin/videos">
          {strings.videos}
        </NavLink>
      </nav>
      <div className="flex flex-col w-full divide-y-2 divide-p-brown">
        <span></span>
        <span></span>
      </div>
      <Table
        modelSchema={{
          type: 'articles',
          fields: {
            title: 'title',
            text: 'paragraph',
            img: 'img',
            publishDate: 'date',
            uploadDate: 'date',
            source: 'object',
          },
        }}
      />
    </div>
  );
};

export default ViewContent;
