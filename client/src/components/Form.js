import React from 'react';
import io from 'socket.io-client';

class Form extends React.Component {
  state = {
    taskName: '',
  }

  componentDidMount() {
    this.socket = io('http://localhost:8000');
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
    this.socket.emit('addTask', this.state.taskName);
  }

  render() {
    const { taskName } = this.state;

    return (
      <form id="add-task-form" onSubmit={() => this.submitForm()}>
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
