import React from 'react';

import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Header title="To-do-app" />

        <section className="tasks">
          <h2>Tasks</h2>
          <List />
        </section>

        <Form />

      </div>
    );
  };
}

export default App;
