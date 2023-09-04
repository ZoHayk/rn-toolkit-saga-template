import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserTypes } from './types';
import { setUserInfo, changeUserInfo } from './actions';

const initialState: UserTypes = {
  initialScreen: 'Auth',

  accessToken: '',
  refreshToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      setUserInfo.type,
      (state: UserTypes, { payload }: PayloadAction<UserTypes>) => ({
        ...state,
        ...payload,
      }),
    );
    builder.addCase(
      changeUserInfo.type,
      (state: UserTypes, { payload }: PayloadAction<string>) => ({
        ...state,
        name: payload,
      }),
    );
  },
});

export const userReducer = userSlice.reducer;
