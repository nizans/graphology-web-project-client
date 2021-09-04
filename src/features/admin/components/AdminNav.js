import React, { useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const strings = { backToMain: 'חזרה לתפריט ראשי', disconnect: 'התנתקות', view: 'צפייה בתכנים', add: 'הוספת תכנים' };

const AdminNav = ({ links, title }) => {
  const { path } = useRouteMatch();

  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h1 className="_text-bold-dark-8xl">{title}</h1>
        <div>
          <nav>
            <NavLink activeClassName="font-bold" className="_text-xl px-4" to={{ pathname: '/admin/view/articles' }}>
              {strings.view}
            </NavLink>
            <NavLink activeClassName="font-bold" className="_text-xl px-4" to={{ pathname: '/admin/add/article' }}>
              {strings.add}
            </NavLink>
            <NavLink className="_text-xl px-4" to="/home">
              {strings.disconnect}
            </NavLink>
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
