// import { PayloadAction } from '@reduxjs/toolkit';
// import { SagaIterator } from 'redux-saga';
// import { Auth } from 'services/api';
// import { put, takeLatest, delay, call, all } from 'redux-saga/effects';
// import { changeUserInfo } from './actions';
//
// export const starWarsDataGenerator = (data: { data: { results: any[] } }[]): any[] => {
//   const newData: any[] = [];
//   data.forEach((item: { data: { results: any[] } }) => {
//     item.data.results.forEach((subItem: any) => {
//       const newDataItem: any = {} as any;
//       if (subItem.url.includes('people')) {
//         newDataItem.type = 'people';
//         newDataItem.name = subItem.name;
//         newDataItem.gender = subItem.gender;
//         newDataItem.starships = String(subItem.starships.length);
//       }
//       if (subItem.url.includes('starships')) {
//         newDataItem.type = 'starship';
//         newDataItem.name = subItem.name;
//         newDataItem.model = subItem.model;
//         newDataItem.manufacturer = subItem.manufacturer;
//         newDataItem.passengers = subItem.passengers;
//       }
//       if (subItem.url.includes('planets')) {
//         newDataItem.type = 'planet';
//         newDataItem.name = subItem.name;
//         newDataItem.diameter = subItem.diameter;
//         newDataItem.population = subItem.population;
//       }
//       if (subItem.url.includes('films')) {
//         newDataItem.type = 'film';
//         newDataItem.title = subItem.title;
//         newDataItem.producer = subItem.producer;
//         newDataItem.director = subItem.director;
//       }
//       newDataItem.isCache = false;
//       newDataItem.url = subItem.url;
//       newData.push(newDataItem);
//     });
//   });
//   return newData;
// };
// function* getUserInfoSaga({ payload }: PayloadAction<string>): SagaIterator {
//   if (payload.length > 2) {
//     // yield put(changeHomeInfo({ key: 'getHomeInfoReqStat', value: AsyncStatus.LOADING }));
//     yield delay(0);
//
//     const requests = [
//       yield call(Auth.getPeopleReq, payload),
//       yield call(Auth.getStarshipReq, payload),
//       yield call(Auth.getPlanetReq, payload),
//       yield call(Auth.getFilmReq, payload),
//     ];
//     const data = yield all(requests);
//     console.log(starWarsDataGenerator(data));
//   } else {
//     console.log('else');
//   }
// }
//
// export function* watchUser(): SagaIterator {
//   yield takeLatest(changeUserInfo.fulfilled.type, getUserInfoSaga);
// }
