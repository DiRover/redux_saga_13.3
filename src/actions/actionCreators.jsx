import {
  LOAD_LIST,
  LOAD_SUCCESS,
  END,
  LOAD_CONTINUATION_SUCCESS,
  LOAD_FAIL,
  LOAD_CONTINUATION_FAIL,
  CANCEL,
  CONTINUATION,
} from './actionTypes';

export const loadNewsList = () => {//экшен первой загрузки списка
  return {
    type: LOAD_LIST,
  }
}

export const loadSuccess = (respons) => {//экшен удачной загрузки списка
  const list = respons;
  return {
    type: LOAD_SUCCESS,
    payload: { list },
  }
}

export const loadFail = () => {//ненужный, т.к. запросы повторяются автоматически каждые 3 сек.,
  return {//экшен неудачной загрузки списка
    type: LOAD_FAIL,
  }
}

export const loadContinuation = (lastSeenId) => {//экшен загрузки продолжения списка
  return {
    type: CONTINUATION,
    payload: { lastSeenId }
  }
}

export const loadContinuationSuccess = (respons) => {//экшен удачной загрузки продолжения списка
  if (respons.length < 5) {
    return {
      type: END,
      payload: { respons }
    }
  } else {
    return {
      type: LOAD_CONTINUATION_SUCCESS,
      payload: { respons }
    }
  }
  
}

export const loadContinuationFail = () => {//ненужный, т.к. запросы повторяются автоматически каждые 3 сек.,
  return {// экшен неудачной закгрузки продолжения списка
    type: LOAD_CONTINUATION_FAIL,
  }
}

export const cancel = () => {//просто отмена, тоже ненужно, ни как не обрабатываем
  return {
    type: CANCEL,
  }
}