import { MOVE_FORWARD, MOVE_BACKWARD } from '../types/types';

export function next() {
  return (dispatch, getState) => {
    dispatch({
      type: MOVE_FORWARD,
      max: getState().slides.size
    });
  }
}

export function previous() {
  return {
    type: MOVE_BACKWARD
  }
}
