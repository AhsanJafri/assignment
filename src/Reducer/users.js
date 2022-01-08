import * as types from "./types";

const initialState = {
  users: null,
  teacher: null,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_UPLOAD:
      return {
        ...state,
        users: action.payload,
      };
      break;
    case types.TEACHER_ADD:
      return {
        ...state,
        teacher: action.payload,
      };
      break;

    case types.RESET:
      return (state = initialState);
      break;
  }
  return state;
};

export default users;
