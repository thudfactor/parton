import { configureStore, getDefaultMiddleware, createSlice } from "@reduxjs/toolkit"
import { colorDuplicationCheck } from "../middleware";
import storage from "redux-persist/lib/storage";

export const config = {
  key: 'root',
  storage: storage,
}

const initialState = {
  color: ['#ffffff','#000000','#ff0000'],
  hideFailures: false,
  testLinks: false
}

const rehydrate = {};
Object.keys(initialState).forEach((key) => {
  const retrieved = localStorage.getItem(key);
  if(retrieved) {
    rehydrate[key] = JSON.parse(retrieved);
  } else {
    console.log("Nope", key);
  }
})

const rootSlice = createSlice({
  name: "root",
  initialState: { ...initialState,...rehydrate },
  reducers: {
    addColor: (state, action) => {
      const color = action.payload;
      state.color.push(color);
      localStorage.setItem('color',JSON.stringify(state.color));
    },
    removeColor: (state, action) => {
      // middleware here to change link color setting 
      // if number of colors drops below 3
      state.color = state.color.filter(c => c !== action.payload)
      localStorage.setItem('color',JSON.stringify(state.color));
      if (state.color.length < 3) {
        state.testLinks = false;
        localStorage.setItem('testLinks',JSON.stringify(false));
      }
    },
    replaceColor: (state, action) =>{
      console.log("Replace Color")
    },
    setBoolProp: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      localStorage.setItem(name,JSON.stringify(state[name]));
    },
    displayWarning: (state, action) => {

    }
  }
});

export const { 
  addColor, 
  removeColor, 
  replaceColor,
  setBoolProp, 
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
