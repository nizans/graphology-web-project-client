import React from 'react';
import SearchIcon from 'assets/icons/search.svg';
import CouchItem from '../components/CouchItem';
import { useFetchContents } from '..';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useQueryParams from 'hooks/useQueryParams';
import Section from 'components/common/Section';
const strings = {
  title: 'על ספת הגרפולוג',
  subtitle: 'ניתוח כתב יד של יוצרים שונים',
  search: 'חיפוש',
  moreInfo: 'מידע נוסף',
  orderBy: 'מיון לפי',
  loading: 'טוען',
};

const Couch = () => {
  const page = useQueryParams().get('page');
  const { path } = useRouteMatch();
  const { isLoading, error, data } = useFetchContents(page);

  return (
    <Section>
      <div className="w-full">
        <h1 className="_text-bold-dark-7xl text-center">{strings.title}</h1>
        <h3 className="_text-bold-3xl text-center">{strings.subtitle}</h3>
      </div>

      <div className="w-full flex justify-between px-4 mt-8 pb-8">
        <select
          className="pr-4 pl-8 bg-p-brown rounded-lg _text-bold-2xl hover:bg-p-brown-dark outline-none "
          name="sortBy">
          <option>{strings.orderBy}</option>
        </select>
        <div className="flex justify-evenly">
          <div className="relative w-6/12 ">
            <input
              placeholder={strings.search}
              className="placeholder-p-gray-dark _text-bold-2xl border-p-blue border-2 rounded-md  w-full pr-8 outline-none"
            />
            <img
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
          </div>

          <a href="/" className="_text-bold-2xl">
            ? {strings.moreInfo}
          </a>
        </div>
      </div>

      <div className="flex flex-col divide-y-2 divide-p-brown w-full">
        <span></span>
        <span></span>
      </div>

      <div className="flex flex-col divide-y-2 divide-p-brown w-full">
        {isLoading && <h1>{strings.loading}</h1>}
        {error && <h1>{error.message}</h1>}
        {data && data.payload && data.payload.map((item, i) => <CouchItem data={item} key={item._id} />)}
        <div className="py-20 flex justify-center items-center">
          {data && data.pages && page < data.pages - 1 && (
            <NavLink to={`${path}?page=${Number(page) + 1}`} className="_text-2xl px-4">
              &lt;
            </NavLink>
          )}
          <ul className="flex justify-center divide-x-2 divide-p-blue _text-3xl flex-row-reverse">
            {data &&
              data.pages &&
              Array.from(Array(data.pages).keys(), (_, i) => (
                <li key={i} className="list-none px-2">
                  <NavLink to={`${path}?page=${i}`} className={Number(page) === i ? 'font-bold' : ''}>
                    <h5>{i + 1}</h5>
                  </NavLink>
                </li>
              ))}
          </ul>

          {page > 0 && (
            <NavLink to={`${path}?page=${Number(page) - 1}`} className="px-4 _text-2xl">
              &gt;
            </NavLink>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Couch;
