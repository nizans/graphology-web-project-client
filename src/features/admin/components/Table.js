import React from 'react';

import { NavLink } from 'react-router-dom';

const Table = ({ modelSchema }) => {
  const handleDelete = id => {};
  const getRightElement = (key, value) => {
    if (modelSchema.fields[key] === 'img') return <img src={value} alt="" />;

    if (modelSchema.fields[key] === 'title') return <h1>{value}</h1>;

    if (modelSchema.fields[key] === 'paragraph') return <p>{value}</p>;

    if (modelSchema.fields[key] === 'date') {
      let date = Date.parse(value);
      return <h3>{value}</h3>;
    }

    if (modelSchema.fields[key] === 'object') {
      let element = [];
      for (const i in value) {
        element.push(
          <div className="w-full flex justify-between">
            <span>{i}</span>
            <span>{value[i]}</span>
          </div>
        );
      }
      return element;
    }
  };

  return (
    <>
      hello
      {/* {isLoading && <p>loading</p>}
      {isError && <p>error</p>}
      {data && (
        <table className="w-full table-auto border-collapse border-2 border-p-gray mt-2">
          <thead>
            <tr>
              {Object.keys(modelSchema.fields).map(key => (
                <th className="border-2 border-p-gray">{key}</th>
              ))}
              <th className="border-2 border-p-gray flex items-center">index</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="overflow-hidden border-b-2 border-p-gray py-2">
                {Object.keys(modelSchema.fields).map((key, x) => (
                  <td key={x} className="border-r-2 border-l-2">
                    <div className="flex flex-col justify-between items-start w-full">
                      {getRightElement(key, item[key])}
                    </div>
                  </td>
                ))}
                <td>
                  <div className="flex w-full h-full justify-between items-center px-2">
                    <NavLink to={`/${modelSchema.type}/${data[i]._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </NavLink>
                    <NavLink to={`/${modelSchema.type}/edit/${data[i]._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </NavLink>
                    <button onClick={() => handleDelete(data[i]._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </>
  );
};

export default Table;
