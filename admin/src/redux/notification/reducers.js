import actions from './actions';
import initialState from '../../demoData/message-list.json';

const { READ_NOTIFICATION_BEGIN, READ_NOTIFICATION_SUCCESS, READ_NOTIFICATION_ERR } = actions;

const initialStateFilter = {
  data: initialState,
  loading: false,
  error: null,
};

const readNotificationReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case READ_NOTIFICATION_BEGIN:
      return {
        ...initialState,
        loading: true,
      };
    case READ_NOTIFICATION_SUCCESS:
      return {
        ...initialState,
        data,
        loading: false,
      };
    case READ_NOTIFICATION_ERR:
      return {
        ...initialState,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { readNotificationReducer };
