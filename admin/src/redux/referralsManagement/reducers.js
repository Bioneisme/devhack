import actions from './actions';

const { SET_TEXT_COMMANDS_TEXT, SET_BUTTON_COMMANDS_TEXT, SET_SHARE_POST_TEXT, SET_IS_FETCHING, SET_ERROR } = actions;

const initialState = {
  instantPayouts: {
    firstGeneration: 1,
    secondGeneration: 1,
    thirdGeneration: 1,
    fourthGeneration: 1,
    fifthGeneration: 1,
    sixthGeneration: 1,
  },
  annualPayouts: {
    firstGeneration: 1,
    secondGeneration: 1,
    thirdGeneration: 1,
    fourthGeneration: 1,
    fifthGeneration: 1,
    sixthGeneration: 1,
  },
  isFetching: false,
  error: null,
};

const referralsManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_COMMANDS_TEXT:
      return {
        ...state,
        textCommandsText: action.payload,
      };
    case SET_BUTTON_COMMANDS_TEXT:
      return {
        ...state,
        buttonCommandsText: action.payload,
      };
    case SET_SHARE_POST_TEXT:
      return {
        ...state,
        sharePostText: action.payload,
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

export { referralsManagementReducer };
