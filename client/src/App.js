import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import io from 'socket.io-client';

import Form from './components/Form/FormContainer';
import List from './components/List/ListContainer';
import Header from './components/Header';

class App extends React.Component {

  componentDidMount() {
    this.socket = io('http://localhost:8000');
    this.socket.on('addTask', ({ id, name }) => this.props.addTask(id, name));
    this.socket.on('removeTask', (id) => this.props.removeTask(id));
    this.socket.on('updateData', (tasks) => this.props.updateTasks()); // -> TODO!! NAPISAĆ METODĘ updateTask, która będzie zapisywała w stanie otrzymaną tablicę
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <Header title="To-do-app" />

          <section className="tasks">
            <h2>Tasks</h2>
            <List />
          </section>

          <Form />

        </div>
      </Provider>
    );
  };
}

export default App;
