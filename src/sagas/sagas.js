import { all, put, takeEvery, retry } from 'redux-saga/effects';
import {loadSuccess, loadContinuationSuccess} from '../actions/actionCreators';
import {LOAD_LIST, CONTINUATION} from '../actions/actionTypes';
import {loaderList, loaderContinuation} from '../api/api';

// worker for list
function* handleListSearch() { // делаем загрузчик для загрузки списка
    
    const maxTries = Infinity; //бесконечное повторение запросов в случае неудач предыдущих
    const retryDelay = 1 * 500; // ms задержка
    const respons = yield retry(maxTries, retryDelay, loaderList); // вызывваем функцию загрузки списка
    yield put(loadSuccess(respons)); // диспатчим удачную загрузку
}

// watcher for list

function* watcherListSearch() { // наблюдатель для загрузки списка
    yield takeEvery(LOAD_LIST, handleListSearch); // берем тип экшена и воркер для загрузки списка
}

// worker for description
function* handleDescriptionSearch(action) { //загрузчик продолжения списка
    const {lastSeenId} = action.payload; //получаем айди последнего загруженного элемента списка
    const maxTries = Infinity; //бесконечное повторение запросов в случае неудач предыдущих
    const retryDelay = 1 * 500; // ms задержка
    const respons = yield retry(maxTries, retryDelay, loaderContinuation, lastSeenId);
    yield put(loadContinuationSuccess(respons));  // диспатчим удачную загрузку
};

// watcher for description
function* watcherDescriptionSearch() { // наблюдатель для загрузки описания
    yield takeEvery(CONTINUATION, handleDescriptionSearch)  // берем тип экшена и воркер для загрузки описания
};

export default function* rootSaga() {
    yield all([watcherListSearch(),
    watcherDescriptionSearch()]) // вместо all можно было каждую отдельную сагу вызвать при помощи  spawn
}