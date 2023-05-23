import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,isLogged:false
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isLogged=true;
    },
    logout: (state) => {
      state.token = null;
      state.isLogged=false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
