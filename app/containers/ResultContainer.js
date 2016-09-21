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
import React from 'react';
import {
    View
} from 'react-native';


import { connect } from 'react-redux';
// import AV from 'leancloud-storage';
import IpResult from '../pages/IpResult';
import IdResult from '../pages/IdResult';
import AppContainer from './AppContainer';
import HistorytodayResult from '../pages/HistorytodayResult';
// import Storage from '../utils/Storage';
import NavigationBar from 'react-native-navbar';

class ResultContainer extends React.Component {


    render() {
        console.log(this.props);
        let view = null;
        let navigator = this.props.navigator;
        let app = this.props.route.app;
        let leftButtonConfig = {
            title: '返回',
            handler: function onGoBack() {
                navigator.resetTo({
                    component: AppContainer,
                    name: 'AppContainer',
                    app: app,
                });
            }
        };

        let titleConfig = {
            title: this.props.route.app.title,
        };
        switch (this.props.route.app.action) {
            case "IpSearch":
                view = <IpResult {...this.props} />;
                break;
            case "IdSearch":
                view = <IdResult {...this.props} />;
                break;
            case "HistorytodaySearch":
                view = <HistorytodayResult {...this.props} />;
                break;
        }
        return (
            <View>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig} />
                {view}
            </View>
        )



    }
}

function mapStateToProps(state) {
    console.log(state);
    const { rIpSearch, rIdSearch, rHistorytodaySearch } = state;
    return {
        rIpSearch,
        rIdSearch,
        rHistorytodaySearch
    };
}

export default connect(mapStateToProps)(ResultContainer);
