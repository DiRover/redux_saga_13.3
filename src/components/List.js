import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';
import Modal from './Modal';
import Card from './Card';
import Button from './Button';

import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 30vh auto;
`;

//компонент для отображения все списка
function List() {
    const { list, loading, errorList, errorContinuation, lastSeenId, end } = useSelector(state => state.list);

    return (
        <Fragment>
            <Container>
                {errorList && <Modal errorList={errorList} />}
                {errorContinuation && <Modal errorContinuation={errorContinuation} />}
                <div>
                {!errorList && <div className="list-group">
                    {list.map((item) => {
                        return <Card item={item} key={item.id}/>
                    })}
                </div>}
                {(loading && !end) && <Spinner />}
                {(!loading && !end) && <Button lastSeenId={lastSeenId}/>}
                </div>
            </Container>

        </Fragment>

    )
};

export default List;
