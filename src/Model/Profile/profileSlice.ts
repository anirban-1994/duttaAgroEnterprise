import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Profile {
  username: string;
  firstname: string;
  lastname: string;
  pic: string;
  email: string;
}

const initialState: Profile = {
  username: '',
  firstname: '',
  lastname: '',
  pic: '',
  email: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state = {...action.payload};
    },
  },
});
