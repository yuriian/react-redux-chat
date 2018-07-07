import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import chatReducer from 'reducers/index';

const logger = createLogger();

const chatStore = createStore(chatReducer, composeWithDevTools(applyMiddleware(logger)));

export default chatStore;
