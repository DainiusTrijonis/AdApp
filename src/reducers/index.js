import {combineReducers} from 'redux'

import ads from './ads'

import {firestoreReducer} from 'redux-firestore'

export default combineReducers({
    ads,
    firestore: firestoreReducer,
})