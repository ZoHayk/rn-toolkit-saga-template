import { Platform, Dimensions, Keyboard } from 'react-native';
import { Any, RootState } from 'types';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const KeyboardDismiss: () => void = () => Keyboard.dismiss();

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = isIOS
  ? Dimensions.get('window').height
  : Dimensions.get('screen').height;

export const errorHandler = (error: Any): Any => error;
export const getStateHandler = (getState: Any): RootState => getState();
