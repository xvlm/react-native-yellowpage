'use strict';

import * as types from '../constants/ActionTypes';
import {ID_SEARCH} from '../constants/Urls';
import {request} from '../utils/RequestUtils';
// import { toastShort } from '../utils/ToastUtil';

export function IdSearch(isRefreshing, loading, txt) {
    return dispatch => {
        console.log(`${ID_SEARCH}${txt}`);
        dispatch(idSearchService());
        request(`${ID_SEARCH}${txt}`, 'get')
            .then((result) => {
                console.log(result);
                dispatch(receiveIdSearch(result));
            })
            .catch((error) => {
                dispatch(receiveIdSearch([]));
                if (error != null) {
                    console.log(error.message);
                    // ToastShort(error.message)
                }
            })
    }
}

function idSearchService() {
    return {
        type: types.ID_SEARCH_SERVICE,
        loading:true
    }
}

function receiveIdSearch(result) {
    return {
        type: types.RECEIVE_ID_SEARCH,
        loading:false,
        result: result
    }
}