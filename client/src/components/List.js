import React from 'react';
import io from 'socket.io-client';

class List extends React.Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    this.socket = io('http://localhost:8000');
  }

  render() {
    const { tasks } = this.state;

    return (
      <ul className="tasks-list">
        {tasks.map(el => (
          <li key={el.id} className="task">
            {el.name}
            <button class="btn btn-remove">Remove</button>
          </li>
        ))}
      </ul>
    )
  }
};

export default List;
