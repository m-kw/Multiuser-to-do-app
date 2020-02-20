import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Form from './components/Form/FormContainer';
import List from './components/List/ListContainer';
import Header from './components/Header';

class App extends React.Component {

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
