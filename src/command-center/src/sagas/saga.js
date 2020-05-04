// import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects'


function* makeRestart() {
    yield put({ type: "COUNTER" })
}

export default function* rootSaga() {
    yield takeLatest("RESTART", makeRestart)
}
