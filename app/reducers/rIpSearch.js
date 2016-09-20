'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  loading: true,
  result: []
}

export default function rIpSearch(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case types.IP_SEARCH_SERVICE:
    console.log('reducer types.IP_SEARCH_SERVICE', state);
      return Object.assign({}, state, {
        loading: action.loading,
      });
    case types.RECEIVE_IP_SEARCH:
      console.log('reducer types.RECEIVE_IP_SEARCH', state);
      return Object.assign({}, state, {
        result: action.result,
        loading: action.result.retData === undefined
      });
    default:
      return state;
  }
}
