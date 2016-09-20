'use strict';

import {combineReducers} from 'redux';
// import notice from './notice';
// import main from './main';
import rIpSearch from './rIpSearch';
import rIdSearch from './rIdSearch';

const rootReducer = combineReducers({
  // main,
  rIpSearch,
  rIdSearch
})

export default rootReducer;