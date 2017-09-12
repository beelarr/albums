import React,{ Component } from 'react';
import axios from 'axios';

import {
    View,
    Text,
}
from 'react-native';


class AlbumList  extends Component {
    componentWillMount() {
        console.log('Component Mounting');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log('response', response));
    }
    render() {
        return(
            <View>
                <Text>Album List</Text>
            </View>
        )
    };
}
export default AlbumList;