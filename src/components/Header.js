import React from 'react';
import {
    Text,
    View
}

from 'react-native';

const Header = (props) => {

    return ( <View style ={styles.viewStyle} >
                <Text style = {styles.textStyle}>{props.headerText}</Text>
            </View>
    )

};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .1,
        elevation: 2,
        position: 'relative'
    }

}

export default Header;
