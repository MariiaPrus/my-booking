import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchHotels(action) {
  try {
    const { data } = yield call(axios.post, 'http://localhost:3000/hotels', action.payload);
    yield put({ type: 'FETCH_HOTELS_SUCCESS', payload: data });
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

export default function* rootSaga() {
  yield takeLatest('FETCH_HOTELS_REQUEST', fetchHotels);
}