'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    loading: true,
    result: []
}

export default function rHistorytodaySearch(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case types.HISTORYTODAY_SEARCH_SERVICE:
            console.log('reducer types.HISTORYTODAY_SEARCH_SERVICE', state);
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_HISTORYTODAY_SEARCH:
            console.log('reducer types.RECEIVE_HISTORYTODAY_SEARCH', state);
            return Object.assign({}, state, {
                loading: false,
                result: action.result
            })
        default:
            return state;
    }
}