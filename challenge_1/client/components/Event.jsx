import React from 'react';

const Event = ({ event }) => {
  return (
    <li>
      <span>{event.description}</span>
    </li>
  )
}

export default Event;