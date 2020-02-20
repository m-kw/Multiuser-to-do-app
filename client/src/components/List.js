import React from 'react';

const List = () => {
  return (
    <ul className="tasks-list">
      <li className="task">
        Shopping
        <button class="btn">Remove</button>
      </li>
      <li className="task">
        Go for a walk
        <button class="btn">Remove</button>
      </li>
    </ul>
  )
};

export default List;
