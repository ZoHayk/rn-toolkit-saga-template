import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';

import { watchApp } from 'modules/app/sagas';

export default function* rootSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([fork(watchApp)]);
}
