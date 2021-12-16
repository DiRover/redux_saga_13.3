import { LOAD_LIST, LOAD_SUCCESS, LOAD_FAIL, LOAD_CONTINUATION_SUCCESS, LOAD_CONTINUATION_FAIL, CANCEL, CONTINUATION, END } from "../actions/actionTypes";

const initialState = {
    list: [],
    loading: true,
    currentId: null,
    errorList: false,
    errorContinuation: false,
    lastSeenId: null,
    errorToggle: false,
    end: false,
};

export default function showListReducer(state = initialState, action) {
    switch (action.type) {

        case LOAD_LIST:
            return {
                ...state, loading: true, errorList: false,
            }

        case LOAD_SUCCESS:
            const { list } = action.payload;
            return {
                ...state, list,
                loading: false,
                lastSeenId: list[list.length - 1].id,
            }

        case LOAD_FAIL:
            return { ...state, errorList: true, loading: false }

        case CONTINUATION:
            return { ...state, errorContinuation: false, loading: true}

        case LOAD_CONTINUATION_SUCCESS:
            let { respons } = action.payload;
            return {
                ...state, list: [...state.list, ...respons], lastSeenId: respons[respons.length - 1].id, errorContinuation: false, loading: false
            }

        case LOAD_CONTINUATION_FAIL:
            return { ...state, errorContinuation: true, loading: false }

        case CANCEL:
            return {
                ...state, errorList: false, errorContinuation: false, loading: false
            }

        case END:
            const responsLast = action.payload.respons;
            return {
                ...state, list: [...state.list, ...responsLast], errorContinuation: false, loading: false, end: true,
            }
        default:
            return state;
    }
}