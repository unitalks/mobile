import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from "./reducers";
import {createLogger} from "redux-logger";
import ReduxThunk from 'redux-thunk'


const log = createLogger({diff: true, collapsed: true});

const middleware = [ReduxThunk, log];
const enhancers = [];

export default createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(...middleware),
        ...enhancers
    )
);