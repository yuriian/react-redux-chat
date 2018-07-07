import { combineReducers } from 'redux';
import usersReducer from 'reducers/usersReducer';
import messagesReducer from 'reducers/messagesReducer';

const chatReducer = combineReducers({ usersReducer, messagesReducer });

export default chatReducer;
