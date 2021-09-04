import React from 'react';
import ButtonsCell from './ButtonsCell';

const strings = {
  title: 'שם',
  subtitle: 'תת כותרת',
  souceFrom: 'מקור הכתבה',
  link: 'לינק',
  image: 'תמונה',
  publishDate: 'תאריך פרסום',
  uploadDate: 'תאריך העלאה',
  description: 'תיאור',
  actions: 'פעולות',
};

const toDate = str => {
  const date = new Date(str);
  return date.toLocaleDateString();
};

const Table = ({ type, isLoading, error, data, mutation }) => {
  const handleDeleteItem = id => {
    mutation.mutate(id);
  };
  const handleEditItem = () => {};

  const mapCells = item => {
    if (type === 'articles') {
      return (
        <>
          <td>{item.title}</td>
          <td>{item.source.from}</td>
          <td>
            <a href={item.source.url}>{strings.link}</a>
          </td>
          <td>{toDate(item.uploadDate)}</td>
          <td>
            <img src={'/uploads/images/' + item.image} alt="" />
          </td>
        </>
      );
    }
    if (type === 'videos') {
      return (
        <>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <a href={'/uploads/images/' + item.url}>{strings.link}</a>
          </td>
          <td>{toDate(item.uploadDate)}</td>
          <td>
            <img src={item.image} alt="" />
          </td>
        </>
      );
    }
    if (type === 'contents') {
      return (
        <>
          <td>{item.title}</td>
          <td>{item.subtitle}</td>
          <td>{toDate(item.publishDate)}</td>
          <td>{toDate(item.uploadDate)}</td>
          <td>
            <img src={item.image} alt="" />
          </td>
        </>
      );
    }
  };

  const mapHeaders = () => {
    if (type === 'articles')
      return (
        <>
          <th>{strings.title}</th>
          <th>{strings.souceFrom}</th>
          <th>{strings.link}</th>
          <th>{strings.uploadDate}</th>
          <th>{strings.image}</th>
        </>
      );
    if (type === 'contents')
      return (
        <>
          <th>{strings.title}</th>
          <th>{strings.subtitle}</th>
          <th>{strings.publishDate}</th>
          <th>{strings.uploadDate}</th>
          <th>{strings.image}</th>
        </>
      );
    if (type === 'videos')
      return (
        <>
          <th>{strings.title}</th>
          <th>{strings.description}</th>
          <th>{strings.link}</th>
          <th>{strings.uploadDate}</th>
          <th>{strings.image}</th>
        </>
      );
  };

  if (isLoading || mutation.isLoading) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  return (
    <table className="table-auto w-full ">
      <thead className="bg-p-brown-light border-b-2 border-p-gray text-right _text-bold-xl">
        <tr>
          <th>#</th>
          {mapHeaders()}
          <th>{strings.actions}</th>
        </tr>
      </thead>
      <tbody className="_text-xl">
        {!error &&
          data &&
          data.payload &&
          data.payload.map((item, i) => (
            <tr key={item._id} className={`border-p-gray border-b-2 ${i % 2 != 0 ? 'bg-p-brown-light' : ''}`}>
              <td>{i + 1}</td>
              {mapCells(item)}
              <td>
                <ButtonsCell
                  type={type}
                  _id={item._id}
                  handleDeleteItem={handleDeleteItem}
                  handleEditItem={handleEditItem}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
