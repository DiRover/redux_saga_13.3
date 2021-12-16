import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadNewsList } from '../actions/actionCreators';
import { useDispatch } from 'react-redux';
import Blank from "./Blank";
import List from "./List";
import Description from "./Description";
import {useEffect} from 'react';
//объединенный компонент с роутами
function UnionComponent(): JSX.Element {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadNewsList());
    }, [dispatch])
    

    return (
        <Router>
            <main className="main-container">
                <Switch>
                    <Route path="/list/:id" exact component={Description} />
                    <Route path="/blank" exact component={Blank} />
                    <Route path="/" exact component={List} />
                </Switch>
            </main>
        </Router>
    )
}

export default UnionComponent