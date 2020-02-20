import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <header>
          <h1>To-do-app</h1>
        </header>

        <section className="tasks">
          <h2>Tasks</h2>

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

          <form id="add-task-form">
            <input className="text-input" autocomplete="off" type="text" placeholder="Add new task" id="task-name" />
            <button className="btn" type="submit">Add</button>
          </form>
        </section>

      </div>
    );
  };
}

export default App;
