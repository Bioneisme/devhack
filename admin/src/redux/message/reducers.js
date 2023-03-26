import actions from './actions';
import initialState from '../../demoData/message-list.json';

const { READ_MESSAGE_BEGIN, READ_MESSAGE_SUCCESS, READ_MESSAGE_ERR } = actions;

const initialStateFilter = {
  data: initialState,
  loading: false,
  error: null,
};

const readMessageReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case READ_MESSAGE_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case READ_MESSAGE_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case READ_MESSAGE_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { readMessageReducer };
