import { all, fork } from 'redux-saga/effects';
import chattinglist from './ChattingList';

export default function* rootSaga() {
    yield all([
        fork(chattinglist),
    ]);
}
