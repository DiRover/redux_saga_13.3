import Context from "./Context";
import {loadContinuation, loadNewsList} from "../actions/actionCreators";
import { useDispatch } from 'react-redux';

export default function Provider(prop) {
    const dispatch = useDispatch();
    const getContinuation = (lastSeenId) => {
        dispatch(loadContinuation(lastSeenId));
    }

    const getList = () => {
        dispatch(loadNewsList());
    }

    return(
        <Context.Provider value={{getContinuation, getList}}>
            {prop.children}
        </Context.Provider>
    )
}

