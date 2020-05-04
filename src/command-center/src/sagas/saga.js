import axios from 'axios';
import { put, takeLatest, call, all } from 'redux-saga/effects'


function* makeRestart() {
    yield put({ type: "COUNTER" })
}

export default function* rootSaga() {
    yield takeLatest("RESTART", makeRestart)
}
