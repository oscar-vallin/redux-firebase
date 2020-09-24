import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import userReducer, {getStorageAction} from './usersDuck';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    user: userReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const generateStore = () => {
    const store = createStore(rootReducers, composeEnhancers( applyMiddleware(thunk)))
    getStorageAction()(store.dispatch)
    return store;
}
export default generateStore;