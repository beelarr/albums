import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import {
    View,
    Image,
    Text,
    Linking
} from 'react-native';

const AlbumDetail = ({ data }) => { //props.data is my data from album list passing to card
    const { title, artist, thumbnail_image, image, url } = data;
    return (

        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>


            <CardSection>
                <Image style={styles.imageStyle} source = {{uri: image}}/>
            </CardSection>


            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>

    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

};


export default AlbumDetail;