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
    ListView,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import LoadingView from '../components/LoadingView';
import * as action from '../actions/IdSearch';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    rIdSearch: PropTypes.object.isRequired
};


class IdResult extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(action.IdSearch(false, true, this.props.route.txtValue));
    }


    render() {
        return (
            <View style={styles.container}>
                {this.props.rIdSearch.loading !== true ?
                    <View>
                        {this.props.rIdSearch.result.retMsg === 'success' ?
                            <View>
                                <View style={styles.resultBorder}>
                                    <Text style={styles.txtName}>{'号码：'}</Text>
                                    <Text  style={styles.txt}>{this.props.route.txtValue}</Text>
                                </View>
                                <View style={styles.resultBorder}>
                                    <Text style={styles.txtName}>{'地区：'}</Text>
                                    <Text  style={styles.txt}>{this.props.rIdSearch.result.retData.address}</Text>
                                </View>
                                <View style={styles.resultBorder}>
                                    <Text style={styles.txtName}>{'生日：'}</Text>
                                    <Text  style={styles.txt}>{this.props.rIdSearch.result.retData.birthday}</Text>
                                </View>
                                <View style={styles.resultBorder}>
                                    <Text style={styles.txtName}>{'性别：'}</Text>
                                    <Text  style={styles.txt}>{this.props.rIdSearch.result.retData.sex === 'M' ? '男' : '女'}</Text>
                                </View>
                            </View>
                            :
                            <Text  style={styles.txt}>{this.props.rIdSearch.result.retMsg} </Text>}
                    </View>
                    : <LoadingView/>}

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
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
        margin: 30,

        width: width - 60,
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

IdResult.propTypes = propTypes;

export default IdResult;