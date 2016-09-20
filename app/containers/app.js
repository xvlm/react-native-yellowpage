/**
 *
 * Copyright 2015-present reading
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
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';

import Splash from '../pages/Splash';
import {naviGoBack} from '../utils/CommonUtil';

let tempNavigator;
let isRemoved = false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    // this.goBack = this.goBack.bind(this);
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight;
  }

  goBack() {
    return naviGoBack(tempNavigator);
  }

  renderScene(route, navigator) {
    let Component = route.component;
    tempNavigator = navigator;
    if (route.name === 'AppContainer') {
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
      isRemoved = true;
    } else if (isRemoved) {
      BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
    }
    return (
      <Component navigator={navigator} route={route} />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#3e9ce9"
          barStyle="default"
          />
        <Navigator
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;
