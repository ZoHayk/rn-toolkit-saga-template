import { createAction } from '@reduxjs/toolkit';
import { UserTypes } from './types';

export const setUserInfo = createAction<UserTypes>('user/SET_USER_INFO');
export const changeUserInfo = createAction<string>('user/CHANGE_USER_INFO');
