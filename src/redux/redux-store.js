import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers);

export default store;