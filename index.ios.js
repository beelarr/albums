//import destructuring
import React from 'react';
import {
    Text,
    AppRegistry
        }
from 'react-native';



const App =  () => (
        <Text>Some Text</Text>
    );



//Registers component
AppRegistry.registerComponent('albums', () => App);