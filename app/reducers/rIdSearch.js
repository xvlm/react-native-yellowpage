'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    loading: true,
    result: []
}

export default function rIdSearch(state = initialState, action) {
    switch (action.type) {
        case types.ID_SEARCH_SERVICE:
            console.log('reducer types.ID_SEARCH_SERVICE', state);
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_ID_SEARCH:
            console.log('reducer types.RECEIVE_ID_SEARCH', state);
            return Object.assign({}, state, {
                loading: false,
                result: action.result
            })
        default:
            return state;
    }
}