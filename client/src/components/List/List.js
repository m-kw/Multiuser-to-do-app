import React from 'react';
import io from 'socket.io-client';

class List extends React.Component {

  componentDidMount() {
    this.socket = io('http://localhost:8000');
  }

  render() {
    const { tasks, removeTask } = this.props;

    return (
      <ul className="tasks-list">
        {tasks.map(el => (
          <li key={el.id} className="task">
            {el.name}
            <button className="btn btn-remove" onClick={() => {
              removeTask(el.id);
              this.socket.emit('removeTask', el.id);
            }}>Remove</button>
          </li>
        ))}
      </ul>
    )
  }
};

export default List;
