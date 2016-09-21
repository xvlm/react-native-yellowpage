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
import React, { PropTypes }from 'react';
import {
    Dimensions,
    View,
    Image,
    TextInput,
    Text,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
} from 'react-native';

import ResultContainer from '../containers/ResultContainer';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;



class HistorytodaySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtValue: ''
        };
    }

    componentDidMount() {
        let myDate = new Date();
        let month = myDate.getMonth() + 1;
        let date = myDate.getDate();
        let year = myDate.getFullYear();
        console.log(year, month, date);
        this.setState({ txtValue: year + '-' + month + '-' + date });
    }


    onPress() {
        const { navigator } = this.props;
        navigator.resetTo({
            component: ResultContainer,
            name: 'ResultContainer',
            txtValue: this.state.txtValue,
            app: this.props.route.app
        });
    }




    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        onPress
                        style={styles.image}
                        source={{ uri: this.props.route.app.icon, }}
                        />
                </View>
                <View style={styles.txtBorder}>
                    <Text style={styles.txtName}>日期</Text>
                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style={styles.textInput}
                        multiline={false}
                        placeholder={'请输入日期 格式:2016-9-20'}
                        password={false}
                        onChangeText={(text) => {
                            this.setState({
                                txtValue: text
                            })
                        } }
                        value={this.state.txtValue}
                        />
                </View>
                <TouchableOpacity onPress={() => this.onPress() }>
                    <View style={styles.buttonBorder}>
                        <Text
                            style={styles.button}
                            >{'Search'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    txtBorder: {
        height: 50,
        borderWidth: 1,
        borderColor: '#51A7F9',
        borderRadius: 25,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row'
    },
    resultBorder: {

        height: 50,
        borderWidth: 1,
        borderColor: '#51A7F9',
        margin: 60,

        width: width - 100,
        borderRadius: 5,
        flexDirection: 'row'
    },
    txtName: {
        height: 20,
        width: 50,
        marginLeft: 20,
        fontSize: 15,
        marginTop: 15,
        color: '#51A7F9',
        marginRight: 10,
    },
    textInput: {
        justifyContent: 'center',
        height: 50,
        width: width - 100
    },
    buttonBorder: {
        height: 50,
        width: 200,
        borderWidth: 1,
        borderColor: '#51A7F9',
        backgroundColor: '#51A7F9',
        borderRadius: 25,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 15,
        color: '#FFF',
    },
    image: {
        margin: 10,
        width: 200,
        height: 103 * PixelRatio.get() * (200 * PixelRatio.get()) / (208 * PixelRatio.get()) - 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5
    },
    txt: {
        height: 20,
        fontSize: 15,
        marginTop: 15,
    }
})

export default HistorytodaySearch;