import axios from 'axios';
import { put, takeLatest, call, all } from 'redux-saga/effects'



export function* makeRestart() {
    console.log("Saga is exceuting")
    yield put({ type: "RESTART" })
}

export default function* rootSaga() {
    yield takeLatest('RESTART', makeRestart)
}
