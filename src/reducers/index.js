import { ADD_COLOR } from "../constants/action-types"

const initialState = {
  bgcolor: ['#ffffff'],
  fgcolor: ['#000000']
}

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === ADD_COLOR ) {
    const { name, color } = payload;
    const newColor = {};
    newColor[name] = state[name].concat(color);
    return Object.assign({},state,newColor);
  }
  return state;
}

export default rootReducer;
