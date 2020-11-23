import { configureStore, getDefaultMiddleware, createSlice } from "@reduxjs/toolkit"
import { colorDuplicationCheck } from "../middleware";

const initialState = {
  bgcolor: ['#ffffff'],
  fgcolor: ['#000000'],
  hideFailures: false
}

const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    addColor: (state, action) => {
      const { name, color } = action.payload;
      state[name] = state[name].concat(color);  
    },
    removeColor: (state, action) => {
      console.log("Remove Color");
    },
    replaceColor: (state, action) =>{
      console.log("Replace Color")
    },
    changeFailureDisplay: (state) => {
      state.hideFailures = !state.hideFailures
    },
    displayWarning: (state, action) => {

    }
  }
});

export const { 
  addColor, 
  removeColor, 
  replaceColor,
  changeFailureDisplay, 
  displayWarning 
} = rootSlice.actions;
const rootReducer = rootSlice.reducer;


const middleware = [
  ...getDefaultMiddleware(),
  colorDuplicationCheck
]

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

export default store;
