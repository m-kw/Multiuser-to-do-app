export const getAll = ({ tasks }) => tasks;

const reducerName = 'tasks';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TASK = createActionName('ADD_TASK');
const REMOVE_TASK = createActionName('REMOVE_TASK');

export const addTask = payload => ({ payload, type: ADD_TASK });
export const removeTask = payload => ({ payload, type: REMOVE_TASK });

export default function reducer(statePart = [], action = {}) {
  console.log(statePart);
  console.log(action);
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...statePart,
        tasks: [...statePart.tasks, action.payload],
      }
    }
    case REMOVE_TASK: {
      return statePart.filter(el => el.id !== action.payload);
    }
    default:
    return statePart;
  }
}
