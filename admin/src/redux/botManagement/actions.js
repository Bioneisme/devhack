const actions = {
  SET_TEXT_COMMANDS_RUSSIAN: 'SET_TEXT_COMMANDS_RUSSIAN',
  SET_TEXT_COMMANDS_ENGLISH: 'SET_TEXT_COMMANDS_ENGLISH',
  SET_BUTTON_COMMANDS_RUSSIAN: 'SET_BUTTON_COMMANDS_RUSSIAN',
  SET_BUTTON_COMMANDS_ENGLISH: 'SET_BUTTON_COMMANDS_ENGLISH',
  SET_SHARE_POST_RUSSIAN: 'SET_SHARE_POST_RUSSIAN',
  SET_SHARE_POST_ENGLISH: 'SET_SHARE_POST_ENGLISH',
  SET_IS_FETCHING: 'SET_IS_FETCHING',
  SET_ERROR: 'SET_ERROR',

  setTextCommandsRussian: (str) => {
    return {
      type: actions.SET_TEXT_COMMANDS_RUSSIAN,
      payload: str,
    };
  },

  setTextCommandsEnglish: (str) => {
    return {
      type: actions.SET_TEXT_COMMANDS_ENGLISH,
      payload: str,
    };
  },

  setButtonCommandsRussian: (str) => {
    return {
      type: actions.SET_BUTTON_COMMANDS_RUSSIAN,
      payload: str,
    };
  },

  setButtonCommandsEnglish: (str) => {
    return {
      type: actions.SET_BUTTON_COMMANDS_ENGLISH,
      payload: str,
    };
  },

  setSharePostRussian: (str) => {
    return {
      type: actions.SET_SHARE_POST_RUSSIAN,
      payload: str,
    };
  },

  setSharePostEnglish: (str) => {
    return {
      type: actions.SET_SHARE_POST_ENGLISH,
      payload: str,
    };
  },

  setIsFetching: (bool) => {
    return {
      type: actions.SET_IS_FETCHING,
      payload: bool,
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
