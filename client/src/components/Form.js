import React from 'react';

const Form = () => {
  return (
    <form id="add-task-form">
      <input className="text-input" autocomplete="off" type="text" placeholder="Add new task" id="task-name" />
      <button className="btn" type="submit">Add</button>
    </form>
  )
};

export default Form;
