'use strict';

import {combineReducers} from 'redux';
// import notice from './notice';
import main from './main';
import rIpSearch from './rIpSearch';
import rIdSearch from './rIdSearch';
import rHistorytodaySearch from './rHistorytodaySearch';

const rootReducer = combineReducers({
  main,
  rIpSearch,
  rIdSearch,
  rHistorytodaySearch
})

export default rootReducer;