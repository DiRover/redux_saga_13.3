import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


function Load(){
    const { loading } = useSelector(state => state);
    
    return (
        <Fragment>
            {loading && <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
           {!loading && <Redirect to='/list' />}
        </Fragment>
    )
}

export default Load; 