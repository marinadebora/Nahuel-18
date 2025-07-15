import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  guests:[],
  music:[],
  data:"",
  error:""
}

export const slice = createSlice({
name:'slice',
initialState,
reducers: {
  get_guests: (state, action)=>{
    state.guests = action.payload.data
  },
  get_music: (state, action)=>{
    state.music = action.payload.data
  },
  post_collection: (state, action)=>{
    state.data = action.payload
  },
  error_slice:(state, action)=>{
    state.error = action.payload.data
  },
}
});

export const { get_guests, get_music,post_collection , error_slice} = slice.actions;
export default slice.reducer