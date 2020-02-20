import React from 'react';
import io from 'socket.io-client';
import shortid from 'shortid';

class Form extends React.Component {
  state = {
    taskName: '',
  }

  componentDidMount() {
    this.socket = io('http://localhost:8000');
  }

  render() {
    const { taskName } = this.state;
    const { addTask } = this.props;

    return (
      <form id="add-task-form" onSubmit={(e) =>{
        e.preventDefault();
        const id = shortid.generate();
        addTask({ id: id, name: this.state.taskName });
        this.socket.emit('addTask', { id: id, name: this.state.taskName});
      }}>
        <input
          className="text-input"
          autoComplete="off"
          type="text"
          placeholder="Add new task"
          id="task-name"
          value={taskName}
          onChange={(e) => this.setState({ taskName: e.target.value })}
        />
        <button className="btn" type="submit">Add</button>
      </form>
    )
  }
};

export default Form;
