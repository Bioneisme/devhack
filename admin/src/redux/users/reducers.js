import initialState from '../../demoData/usersData.json';
import initialStateGroup from '../../demoData/usersGroupData.json';

const userReducer = (state = initialState) => {
  return state;
};

const userGroupReducer = (state = initialStateGroup) => {
  return state;
};

export { userReducer, userGroupReducer };
