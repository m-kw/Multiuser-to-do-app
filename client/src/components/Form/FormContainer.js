import { connect } from 'react-redux';

import Form from './Form';

import { addTask } from '../../redux/tasksRedux';

const mapDispatchToProps = (dispatch, props) => ({
  addTask: id => dispatch(addTask(id)),
});

export default connect(null, mapDispatchToProps)(Form);
