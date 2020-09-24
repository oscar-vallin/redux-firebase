import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LogIn from './components/logIn/LogIn';
import Pokemon from './components/pokemon/Pokemon';

const PrivateRoutes = ({path, component, ...rest}) => {
    let storage = localStorage.getItem('storage');
    storage = JSON.parse(storage);
    if(storage && storage.user){
       return <Route path={path} component={component} {...rest} />
    } else {
        return <Redirect to="/" {...rest}/>
    }
}

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={LogIn} />
            <PrivateRoutes path="/pokemon" component={Pokemon} />
        </Switch>
    );
}
export default Router;