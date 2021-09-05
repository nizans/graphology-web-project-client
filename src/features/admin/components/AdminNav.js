import { SectionHeightContext } from 'context/sectionHeightContext';
import { postRandomArticles, postRandomContents, postRandomVideos } from 'dev/randomItemsGen';
import useDimensions from 'hooks/useDimensions';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const strings = {
  backToMain: 'חזרה לתפריט ראשי',
  disconnect: 'התנתקות',
  view: 'צפייה בתכנים',
  add: 'הוספת תכנים',
  addtitle: 'הוספת תוכן חדש',
  viewTitle: 'תכנים באתר',
};


const viewLinks = [
  { name: 'כתבות', to: 'view/articles' },
  { name: 'תכנים מספת הגרפולוג', to: 'view/contents' },
  { name: 'סרטונים', to: 'view/videos' },
  { name: 'שירותים', to: 'view/services' },
];

const addLinks = [
  { name: 'כתבה', to: 'add/article' },
  { name: 'על ספת הגרפולוג', to: 'add/content' },
  { name: 'וידאו', to: 'add/video' },
  { name: 'שירותים', to: 'add/service' },
];
const AdminNav = () => {
  const { path } = useRouteMatch();
  const addPage = useRouteMatch('/admin/add');
  const viewPage = useRouteMatch('/admin/view');
  const [headerRef, headerDimension] = useDimensions();
  const sectionHeightCTX = useContext(SectionHeightContext);

  const [links, setLinks] = useState(addPage ? addLinks : viewLinks);
  const [title, setTitle] = useState(addPage ? strings.addtitle : strings.viewTitle);
  useEffect(() => {
    if (headerDimension) sectionHeightCTX.setHeaderHeight(headerDimension.height);
  }, [headerDimension, sectionHeightCTX]);

  useEffect(() => {
    if (viewPage && !addPage) {
      setLinks(viewLinks);
      setTitle(strings.viewTitle);
    } else {
      setLinks(addLinks);
      setTitle(strings.addtitle);
    }
  }, [viewPage, addPage]);
  return (
    <div ref={headerRef}>
      <div className="flex justify-between items-center w-full">
        <h1 className="_text-bold-dark-8xl">{title}</h1>
        <div>
          <nav>
            <NavLink activeClassName="font-bold" className="_text-xl px-4" to="/admin/view">
              {strings.view}
            </NavLink>
            <NavLink activeClassName="font-bold" className="_text-xl px-4" to="/admin/add">
              {strings.add}
            </NavLink>
            <NavLink className="_text-xl px-4" to="/home">
              {strings.disconnect}
            </NavLink>
            <button onClick={() => postRandomArticles(10)}>Random 10 Articles</button>
            <button onClick={() => postRandomContents(10)}>Random 10 Contents</button>
            <button onClick={() => postRandomVideos(10)}>Random 10 Videos</button>
          </nav>
        </div>
      </div>

      <nav className="flex items-center divide-x-2 divide-p-brown divide-x-reverse mb-2">
        {links.map((link, i) => (
          <NavLink
            key={i}
            className={`_text-3xl ${i === 0 ? 'pl-4' : 'px-4'}`}
            activeClassName="font-bold"
            to={`${path}/${link.to}`}>
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col w-full divide-y-2 divide-p-brown">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default AdminNav;
