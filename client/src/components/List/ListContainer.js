import { connect } from 'react-redux';

import List from './List';

import { getAll, removeTask, addTask } from '../../redux/tasksRedux';

const mapStateToProps = state => ({
  tasks: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  removeTask: id => dispatch(removeTask(id)),
  addTask: name => dispatch(addTask(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
