import * as types from "./types";

export function updateRecord(data) {
  return {
    type: types.USER_UPLOAD,
    payload: data,
  };
}

export function AddTeacher(data) {
  return {
    type: types.TEACHER_ADD,
    payload: data,
  };
}

export function reset() {
  return {
    type: types.RESET,
  };
}
