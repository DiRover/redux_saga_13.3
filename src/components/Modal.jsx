import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { cancel } from '../actions/actionCreators';

import Context from '../context/Context';

export default function Modal(props) {
    const {errorList} = props;
    const {errorContinuation} = props;
    const { getContinuation, getList } = useContext(Context);
    const { lastSeenId } = useSelector(state => state.list);
    const dispatch = useDispatch();



const cancelHandler = () => {
     dispatch(cancel());
}
return (
    <Fragment>
        <div className="modal" style={{display: "block", top: "30vh"}}>
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Loading is fail</h5>
                <Link to='/blank'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cancelHandler}></button></ Link>
            </div>
            <div className="modal-body">
                <p>Do you want to load data again?</p>
            </div>
            <div className="modal-footer">
                <Link to='/blank'><button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelHandler}>Nooo, it's too bored</button></ Link>
                <button type="button" className="btn btn-primary" onClick={() => (errorList && getList()) || (errorContinuation && getContinuation(lastSeenId))}>Yes, I do</button>
            </div>
        </div>
    </div>
</div>
    </Fragment>)
}
