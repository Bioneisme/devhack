const actions = {
  SET_TEXT_COMMANDS_TEXT: 'SET_TEXT_COMMANDS_TEXT',
  SET_BUTTON_COMMANDS_TEXT: 'SET_BUTTON_COMMANDS_TEXT',
  SET_SHARE_POST_TEXT: 'SET_SHARE_POST_TEXT',
  SET_IS_FETCHING: 'SET_IS_FETCHING',
  SET_ERROR: 'SET_ERROR',

  setTextCommandsText: (text) => {
    return {
      type: actions.SET_TEXT_COMMANDS_TEXT,
      payload: text,
    };
  },

  setButtonCommandsText: (text) => {
    return {
      type: actions.SET_BUTTON_COMMANDS_TEXT,
      payload: text,
    };
  },

  setSharePostText: (text) => {
    return {
      type: actions.SET_SHARE_POST_TEXT,
      payload: text,
    };
  },

  setIsFetching: (status) => {
    return {
      type: actions.SET_IS_FETCHING,
      payload: status,
    };
  },

  setError: (error) => {
    return {
      type: actions.SET_ERROR,
      payload: error,
    };
  },
};

export default actions;
