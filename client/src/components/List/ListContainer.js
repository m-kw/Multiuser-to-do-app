import { connect } from 'react-redux';

import List from './List';

import { getAll, removeTask } from '../../redux/tasksRedux';

const mapStateToProps = state => ({
  tasks: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  removeTask: index => dispatch(removeTask(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
