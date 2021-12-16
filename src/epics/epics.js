import { ofType, } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, switchMap, retry } from 'rxjs/operators';
import { LOAD_LIST, CONTINUATION } from '../actions/actionTypes';
import { loadSuccess, loadContinuationSuccess } from '../actions/actionCreators';
import { interval } from 'rxjs';

export const listEpic = action$ => action$.pipe(
    ofType(LOAD_LIST),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/ra/news`).pipe(
        retry(interval(3000)),//продолжаем загрузку в случае неудачной попытки каждые 3 сек.
        map(respons => loadSuccess(respons)),
        // catchError(() => of(loadFail()))
    )),
);

export const descriptionEpic = action$ => action$.pipe(
    ofType(CONTINUATION),
    map((o) => o.payload.lastSeenId),
    tap(o => console.log(o)),
    switchMap((lastSeenId) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/ra/news?lastSeenId=${lastSeenId}`).pipe(
        retry(interval(3000)),//продолжаем загрузку в случае неудачной попытки каждые 3 сек.
        map(respons => loadContinuationSuccess(respons)),
        // catchError(() => of(loadContinuationFail()))
    )),
);

