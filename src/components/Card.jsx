import styled from 'styled-components';
import logo from '../color_big.png';
import { resurces } from '../resurces/resurces';
import getRandomInt from '../services/getRandomInt';
import moment from 'moment';
import './card.css'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 60%;
margin: 20px auto;
`;

const StyledImg = styled.div`
margin: 0 10px 10px 0;
`;

/*
const StyledText = styled.div`
display: inline-block;
align-items: center;
width: 100%;
overflow-wrap: break-word;
`;
*/
const StyledDate = styled.div`
font-weight: bold;
font-size: 0.8rem;
color: grey;
width: 100%;
`;
//компонент для отображения элемента списка
//ссылки в json на картинки не работают, вставил свои
export default function Card(props) {
    const {item} = props;
    const index = getRandomInt(resurces.length);
    const date = new Date(1565887673);
    return (
        <Container>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><StyledImg><img src={logo} width="30px" height="30px" alt="..." /></StyledImg>
                    Университет интернет-профессий Нетология</h5>
                    <StyledDate>{moment(date).format('ddd, MMMM hh:mm')}</StyledDate>
                    <p className="card-text" display="inlineblock">{item.text}</p>
                    <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
                  </div>
                  <img src={resurces[index]} className="card-img-bottom" alt="..." />
                  <div>likes: {item.likes.count} comments: {item.comments.count} reposts: {item.reposts.count} views: {item.views.count}</div>
                </div>
        </Container>
    )
}