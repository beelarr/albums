//import destructuring
import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {
    View,
    AppRegistry,

        }
from 'react-native';



const App =  () => (
    <View>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
    );




//Registers component
AppRegistry.registerComponent('albums', () => App);