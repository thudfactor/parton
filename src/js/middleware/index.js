import { ADD_COLOR } from "../constants/action-types"
import { displayWarning } from "../store"

export function colorDuplicationCheck({getState, dispatch}) {
  return function(next) {
    return function(action) {
      const state = getState();
      if(action.type === ADD_COLOR) {
        const { name, color } = action.payload;
        if(state[name] && Array.isArray(state[name])) {
          // In theory this should be a color array at this point
          if(state[name].indexOf(color) === -1) {
            return next(action);
          }
        } else {
          // Either the array doesn't exist or we are incorrectly
          // addressing something else somehow
          dispatch(new displayWarning("You've already added this color."))
        }
      }
      return next(action);
    }
  }
}
