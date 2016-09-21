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
import * as action from '../actions/HistorytodaySearch';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    rHistorytodaySearch: PropTypes.object.isRequired
};


class HistorytodayResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }

    componentDidMount() {
        var tmp = this.props.route.txtValue.split('-');
        let yue = tmp[1];
        let ri = tmp[2];
        let type = 1;
        let page = 1;
        let rows = 50;
        let dtype = 'json';
        let format = 'false';
        this.search(yue, ri, type, page, rows, dtype, format);

    }

    search(yue, ri, type, page, rows, dtype, format) {
        const { dispatch } = this.props;
        dispatch(action.historytodaySearch(false, true, `yue=${yue}&ri=${ri}&type=${type}&page=${page}&rows=${rows}&dtype=${dtype}&format=${format}`));
    }



    renderItem(article) {
        console.log(article);
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row', width: width }} >
                    <Text style={styles.title}>
                        {article.year}-{article.month}-{article.day}
                    </Text>
                    <Text style={{ flex: 1, fontSize: 14, color: '#87CEFA', marginLeft: 10 }}>
                        {article.title}
                    </Text>

                </View>
            </View>
        );
    }

    renderContent(dataSource) {
        console.log(dataSource);
        if (this.props.rHistorytodaySearch.loading) {
            return <LoadingView style={styles.container}/>
        }

        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                horizontal={false}
                contentContainerStyle={styles.no_data}
                style={styles.listView}
                >
                <ListView
                    initialListSize={1}
                    dataSource={dataSource}
                    renderRow={this.renderItem}

                    />
            </ScrollView>
        );
    }



    render() {
        return (
            <View style={styles.container}>
                {this.renderContent(this.state.dataSource.cloneWithRows(this.props.rHistorytodaySearch.result.length === 0 ? [] : this.props.rHistorytodaySearch.result.result)) }
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
    listView: {
        height: height - 200,
        marginLeft: 60,
        width: width,
        flex: 1,
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

HistorytodayResult.propTypes = propTypes;

export default HistorytodayResult;