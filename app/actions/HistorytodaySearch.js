'use strict';

import * as types from '../constants/ActionTypes';
import {HISTORYTODAY_SEARCH} from '../constants/Urls';
import {request} from '../utils/RequestUtils';
// import { toastShort } from '../utils/ToastUtil';

export function historytodaySearch(isRefreshing, loading, txt) {
    return dispatch => {
        console.log(`${HISTORYTODAY_SEARCH}${txt}`);
        dispatch(historytodaySearchService());
        request(`${HISTORYTODAY_SEARCH}${txt}`, 'get')
            .then((result) => {
                console.log(result);
                dispatch(receiveHistorytodaySearch(result));
            })
            .catch((error) => {
                dispatch(receiveHistorytodaySearch([]));
                if (error != null) {
                    console.log(error.message);
                    // ToastShort(error.message)
                }
            })
    }
}

function historytodaySearchService() {
    return {
        type: types.HISTORYTODAY_SEARCH_SERVICE,
        loading:true
    }
}

function receiveHistorytodaySearch(result) {
    return {
        type: types.RECEIVE_HISTORYTODAY_SEARCH,
        loading:false,
        result: result
    }
}