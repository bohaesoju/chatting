import { all, fork } from 'redux-saga/effects';
import info from './info';

export default function* rootSaga() {
    yield all([
        fork(info),
    ]);
}