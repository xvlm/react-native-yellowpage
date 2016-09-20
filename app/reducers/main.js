/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import * as types from '../constants/ActionTypes';

const initialState = {
  result: {},
  loading: true
};

export default function main(state = initialState, action) {
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
        loading: state.result.retData === undefined
      });
    default:
      return state;
  }
}

function combine(state, action) {
  state.articleList[action.typeId] = action.articleList;
  return state.articleList;
}

function loadMore(state, action) {
  state.articleList[action.typeId] = state.articleList[action.typeId].concat(action.articleList);
  return state.articleList;
}
