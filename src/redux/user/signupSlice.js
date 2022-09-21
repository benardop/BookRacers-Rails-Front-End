import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/';

const initialState = {
  loading: false,
  user: {},
  error: '',
  authenticated: false,
};

// const setToken = (token) => {
//   localStorage.setItem('token', token);
//   localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
// };

// const getToken = () => {
//   const now = new Date(Date.now()).getTime();
//   const thirtyMinutes = 1000 * 60 * 30;
//   const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
//   if (timeSinceLastLogin < thirtyMinutes) {
//     return localStorage.getItem('token');
//   }
//   return '';
// };

// Generated pending, fulfilled and rejected action types
export const signup = createAsyncThunk('user/signup', (credentials) => axios
  .post(`${BASE_URL}signup`, {
    user: credentials,
  })
  .then((response) => response.data));
  // setToken(response.data.token);

const signupSlice = createSlice({
  name: 'userSignup',
  initialState,
  /* eslint-disable */
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.user = {};
      state.error = '';
      state.authenticated = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
      state.authenticated = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
      state.authenticated = false;
    });
  },
  /* eslint-enable */
});

export default signupSlice.reducer;
