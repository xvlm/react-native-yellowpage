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
import React, { PropTypes } from 'react';
import {
    StyleSheet,
    ListView,
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
    InteractionManager,
    ActivityIndicator,
    DrawerLayoutAndroid,
    Image,
    Dimensions,
    PixelRatio,
    Platform,
    View,
    DeviceEventEmitter,
    NativeModules
} from 'react-native';

import { AdMobInterstitial, AdMobBanner } from 'react-native-admob';
import {APPS} from '../constants/Apps';
import AppContainer from '../containers/AppContainer';



let { width, height } = Dimensions.get('window');


class Main extends React.Component {
    constructor(props) {
        super(props);

    } 
   

    onPress(app) {
        const { navigator } = this.props;
        navigator.resetTo({
            component: AppContainer,
            name: 'AppContainer',
            app: app,
        });
    }

    render() {
        
        let key = 1;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.main}>
                    <View style={styles.container}>
                        {APPS.map((app) => {
                            // console.log(app.icon);
                            // const appImg = require(app.icon);
                            const appView = (
                                <View
                                    key={key++}
                                    style={styles.app}
                                    >
                                    <TouchableOpacity onPress={() => this.onPress(app) }>
                                        <Image
                                            resizeMode={Image.resizeMode.contain}
                                            style={styles.image}
                                            source={{ uri: app.icon }}
                                            />
                                    </TouchableOpacity>
                                </View>
                            );
                            return appView;
                        }) }
                    </View>
                </ScrollView>
                <AdMobBanner
                    bannerSize="smartBannerPortrait"
                    testDeviceID="EMULATOR"
                    adUnitID="ca-app-pub-1114976574475183/6436382287"
                    />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    main: {
        width: width,
        height: height - 100,


    },
    image: {
        margin: 10,
        width: width / 2 - 20,
        height: 103 * PixelRatio.get() * (width / 2 * PixelRatio.get()) / (208 * PixelRatio.get()) - 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5
    },
    app: {
        flex: 1,


        width: width / 2 - 10,
        height: 103 * PixelRatio.get() * (width / 2 * PixelRatio.get()) / (208 * PixelRatio.get())
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    listView: {
        backgroundColor: '#eeeeec'
    },
    no_data: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    drawerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    drawerIcon: {
        width: 30,
        height: 30,
        marginLeft: 5
    },
    drawerText: {
        fontSize: 18,
        marginLeft: 15,
        textAlign: 'center',
        color: 'black'
    }
});

export default Main;
