// import { dispatch, getState } from '../store';
// import { changeError, ErrorsTypes } from '../features/errors';
// import validatorIsEmpty from 'validator/es/lib/isEmpty';
// import validatorIsEmail from 'validator/es/lib/isEmail';
// import validatorIsMobilePhone from 'validator/es/lib/isMobilePhone';
//
// const EMPTY_MSG = 'The field must not be empty.';
// const PHONE_NUMBER_MSG = 'Incorrect phone number.';
// const EMAIL_MSG = 'Incorrect email.';
//
// export const isEmpty = (value: string, module: keyof ErrorsTypes, key: string): void => {
//   const errors = getState().errors;
//
//   if (validatorIsEmpty(value)) {
//     !errors[module][key] && dispatch(changeError({ module, key, value: EMPTY_MSG }));
//   } else {
//     errors[module][key] && dispatch(changeError({ module, key }));
//   }
// };
//
// export const isPhoneNumber = (value: string, module: keyof ErrorsTypes, key: string): void => {
//   const errors = getState().errors;
//
//   if (validatorIsEmpty(value)) {
//     dispatch(changeError({ module, key, value: EMPTY_MSG }));
//   } else {
//     if (!validatorIsMobilePhone(value, ['en-US'])) {
//       (!errors[module][key] ||
//         errors[module][key] === EMPTY_MSG ||
//         errors[module][key] === EMAIL_MSG) &&
//         dispatch(changeError({ module, key, value: PHONE_NUMBER_MSG }));
//     } else {
//       errors[module][key] && dispatch(changeError({ module, key }));
//     }
//   }
// };
//
// export const isEmail = (value: string, module: keyof ErrorsTypes, key: string): void => {
//   const errors = getState().errors;
//
//   if (validatorIsEmpty(value)) {
//     dispatch(changeError({ module, key, value: EMPTY_MSG }));
//   } else {
//     if (!validatorIsEmail(value)) {
//       (!errors[module][key] ||
//         errors[module][key] === EMPTY_MSG ||
//         errors[module][key] === PHONE_NUMBER_MSG) &&
//         dispatch(changeError({ module, key, value: EMAIL_MSG }));
//     } else {
//       errors[module][key] && dispatch(changeError({ module, key }));
//     }
//   }
// };
// export const isBooleanEmail = (value: string): boolean => {
//   if (validatorIsEmpty(value)) {
//     return true;
//   } else {
//     return !validatorIsEmail(value);
//   }
// };
//
// export const isPassword = (value: string, module: keyof ErrorsTypes, key: string): void => {
//   const errors = getState().errors;
//
//   if (validatorIsEmpty(value)) {
//     dispatch(changeError({ module, key, value: EMPTY_MSG }));
//   } else {
//     if (value.search(/[$&+,:;=?@#|'<>.^*()%!-]/) < 0 || value.search(/[A-Z]/) < 0) {
//       (!errors[module][key] || errors[module][key] === EMPTY_MSG) &&
//         dispatch(changeError({ module, key, value: 'Incorrect password.' }));
//     } else {
//       errors[module][key] && dispatch(changeError({ module, key }));
//     }
//   }
// };
//
// export const isConfPass = (
//   confirmPassword: string,
//   password: string,
//   module: keyof ErrorsTypes,
//   key: string,
// ): void => {
//   const errors = getState().errors;
//
//   if (validatorIsEmpty(confirmPassword)) {
//     dispatch(changeError({ module, key, value: EMPTY_MSG }));
//   } else {
//     if (
//       confirmPassword.length < 8 ||
//       confirmPassword.search(/[$&+,:;=?@#|'<>.^*()%!-]/) < 0 ||
//       confirmPassword.search(/[A-Z]/) < 0 ||
//       confirmPassword !== password
//     ) {
//       (!errors[module][key] || errors[module][key] === EMPTY_MSG) &&
//         dispatch(changeError({ module, key, value: 'Incorrect confirm password.' }));
//     } else {
//       errors[module][key] && dispatch(changeError({ module, key }));
//     }
//   }
// };
