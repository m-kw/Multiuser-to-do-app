import React from 'react';
import io from 'socket.io-client';

class List extends React.Component {
  state = {
    tasks: [
      {id: 1, name: 'Shopping'},
      {id: 2, name: 'Read a book'},
    ],
  }

  componentDidMount() {
    this.socket = io('http://localhost:8000');
  }

  removeTask(id) {
    const { tasks } = this.state;
    let index = '';

    tasks.filter(el => {
      if (el.id === id) {
        index = tasks.indexOf(el);
      }
      return index;
    })

    this.setState({
      tasks: tasks.filter(el => el.id !== id),
    });

    this.socket.emit('removeTask', index);
  }

  render() {
    const { tasks } = this.state;

    return (
      <ul className="tasks-list">
        {tasks.map(el => (
          <li key={el.id} className="task">
            {el.name}
            <button className="btn btn-remove" onClick={() => this.removeTask(el.id)}>Remove</button>
          </li>
        ))}
      </ul>
    )
  }
};

export default List;
