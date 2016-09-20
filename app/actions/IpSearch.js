'use strict';

import * as types from '../constants/ActionTypes';
import {IP_SEARCH} from '../constants/Urls';
import {request} from '../utils/RequestUtils';
// import { toastShort } from '../utils/ToastUtil';

export function IpSearch(isRefreshing, loading, txt) {
    return dispatch => {
        console.log(`${IP_SEARCH}${txt}`);
        dispatch(ipSearchService());
        request(`${IP_SEARCH}${txt}`, 'get')
            .then((result) => {
                console.log(result);
                dispatch(receiveIpSearch(result));
            })
            .catch((error) => {
                dispatch(receiveIpSearch([]));
                if (error != null) {
                    console.log(error.message);
                    // ToastShort(error.message)
                }
            })
    }
}

function ipSearchService() {
    return {
        type: types.IP_SEARCH_SERVICE,
        loading:true
    }
}

function receiveIpSearch(result) {
    return {
        type: types.RECEIVE_IP_SEARCH,
        loading:false,
        result: result
    }
}