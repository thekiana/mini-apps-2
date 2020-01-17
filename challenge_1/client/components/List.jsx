import React from 'react';
import Event from './Event.jsx';

const List = ({ list, query }) => {
  return (
  <div className="list-header">
     <h1>Searching word... {query} </h1>

    <ul className="list">
      {list.map(event => (
        <Event event={event} />
      ))}
    </ul>
  </div>
  )
}

export default List;