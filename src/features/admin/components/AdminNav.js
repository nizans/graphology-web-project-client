import Underline from 'components/UI/Underline';
import { AuthContext } from 'context/authContext';
import { SectionHeightContext } from 'context/sectionHeightContext';
import { postRandomArticles, postRandomBooks, postRandomContents } from 'dev/randomItemsGen';
import useDimensions from 'hooks/useDimensions';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const strings = {
  backToMain: 'חזרה לתפריט ראשי',
  addtitle: 'הוספת תוכן חדש',
  viewTitle: 'תכנים באתר',
  logout: 'התנתקות',
  hello: 'שלום ',
};

const mainLinks = [
  { name: 'צפייה בתכנים', to: 'view' },
  { name: 'הוספת תכנים', to: 'add' },
];

const viewLinks = [
  { name: 'כתבות', to: 'view/articles' },
  { name: 'תכנים מספת הגרפולוג', to: 'view/contents' },
  { name: 'סרטונים', to: 'view/videos' },
  { name: 'שירותים', to: 'view/services' },
  { name: 'ספרים', to: 'view/books' },
];

const addLinks = [
  { name: 'כתבה', to: 'add/articles' },
  { name: 'על ספת הגרפולוג', to: 'add/contents' },
  { name: 'וידאו', to: 'add/videos' },
  { name: 'ספרים', to: 'add/books' },
  { name: 'שירותים', to: 'add/services' },
];

const AdminNav = () => {
  const { path } = useRouteMatch();
  const viewPage = useRouteMatch('/admin/view');
  const [headerRef, headerDimension] = useDimensions();
  const sectionHeightCTX = useContext(SectionHeightContext);
  const { logout, user } = useContext(AuthContext);
  const [links, setLinks] = useState(viewPage ? viewLinks : addLinks);
  const [title, setTitle] = useState(viewPage ? strings.viewTitle : strings.addtitle);

  useEffect(() => {
    if (headerDimension) sectionHeightCTX.setHeaderHeight(headerDimension.height);
  }, [headerDimension, sectionHeightCTX]);

  useEffect(() => {
    setLinks(viewPage ? viewLinks : addLinks);
    setTitle(viewPage ? strings.viewTitle : strings.addtitle);
  }, [viewPage]);

  return (
    <>
      <div ref={headerRef} className="fixed z-50 top-0 bg-background container">
        <div className="flex justify-between items-center w-full">
          <div>
            <h5 className="_text-3xl">{strings.hello + user.name}</h5>
            <h1 className="_text-bold-dark-8xl">{title}</h1>
          </div>

          <div>
            <nav>
              {mainLinks.map((link, i) => (
                <NavLink key={link.to} activeClassName="font-bold" className="_text-xl px-4" to={`${path}/${link.to}`}>
                  {link.name}
                </NavLink>
              ))}
              <button type="button" onClick={logout} className="_text-xl px-4">
                {strings.logout}
              </button>
              <ul>
                <li>
                  <button onClick={() => postRandomArticles(10)}>Random 10 Articles</button>
                </li>
                <li>
                  <button onClick={() => postRandomContents(10)}>Random 10 Contents</button>
                </li>
                <li>
                  <button onClick={() => postRandomBooks(10)}>Random 10 Books</button>
                </li>
              </ul>
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
        <Underline thickness={2} />
      </div>
      <div style={{ height: headerDimension?.height }}></div>
    </>
  );
};

export default AdminNav;
