
import { ADD, DEL } from '../constants/counter';

function verifyDel(state) {
  if (state <= 0) {
    return 0;
  }
  return state - 1;
}

const Counter = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    case DEL:
      return verifyDel(state);
    default:
      return state;
  }
}

export default Counter;
