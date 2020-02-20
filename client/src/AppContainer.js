import { connect } from 'react-redux';

import App from './App';

import { addTask, removeTask } from './redux/tasksRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addTask: (id, name) => dispatch(addTask(id, name)),
  removeTask: id => dispatch(removeTask(id)),
});

export default connect(null, mapDispatchToProps)(App);
