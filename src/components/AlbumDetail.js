import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import {
    View,
    Text
} from 'react-native';

const AlbumDetail = (props) => { //props.data is my data from album list passing to card
    return (

        <Card>
            <CardSection>
                <Text>{props.data.title}</Text>
            </CardSection>
        </Card>

    )
};

export default AlbumDetail;