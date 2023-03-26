import actions from './actions';

const {
  SET_TEXT_COMMANDS_RUSSIAN,
  SET_TEXT_COMMANDS_ENGLISH,
  SET_BUTTON_COMMANDS_RUSSIAN,
  SET_BUTTON_COMMANDS_ENGLISH,
  SET_SHARE_POST_RUSSIAN,
  SET_SHARE_POST_ENGLISH,
  SET_IS_FETCHING,
  SET_ERROR
} = actions;

const initialState = {
  textCommandsRussian: '',
  textCommandsEnglish: '',
  buttonCommandsRussian: '',
  buttonCommandsEnglish: '',
  sharePostRussian: '',
  sharePostEnglish: '',
  isFetching: false,
  error: null,
};

const botManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_COMMANDS_RUSSIAN:
      return {
        ...state,
        textCommandsRussian: action.payload,
      };
    case SET_TEXT_COMMANDS_ENGLISH:
      return {
        ...state,
        textCommandsEnglish: action.payload,
      };
    case SET_BUTTON_COMMANDS_RUSSIAN:
      return {
        ...state,
        buttonCommandsRussian: action.payload,
      };
    case SET_BUTTON_COMMANDS_ENGLISH:
      return {
        ...state,
        buttonCommandsEnglish: action.payload,
      };
    case SET_SHARE_POST_RUSSIAN:
      return {
        ...state,
        sharePostRussian: action.payload,
      };
    case SET_SHARE_POST_ENGLISH:
      return {
        ...state,
        sharePostEnglish: action.payload,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { botManagementReducer };
