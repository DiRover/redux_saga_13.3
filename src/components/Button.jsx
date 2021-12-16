import styled from 'styled-components';
import { useContext } from 'react';
import Context from '../context/Context';

const StyledContainer = styled.div`
display: flex;
justify-content: center;
margin: 30px auto;
`;
//компонент с кнопкой для продолжения загрузки списка
export default function Button(props) {
    const {lastSeenId} = props;
    const { getContinuation } = useContext(Context);
    return (
        <StyledContainer>
            <button type="button" className="btn btn-primary btn-lg" onClick={()=> getContinuation(lastSeenId)}>Load next</button>
        </StyledContainer>
    )
}