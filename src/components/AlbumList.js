import React,{ Component } from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

import {
    View,
}
from 'react-native';


class AlbumList  extends Component {
    state = { albums: [] };  //can be in a constructor, but ultimatly it creates this.state

    componentWillMount() {
        console.log('Component Mounting');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data}));
    }

    renderAlbums() { //passing to album Detail data is my album data
       return this.state.albums.map(album =>
           <AlbumDetail key={album.title} data = {album} />
       );
    }


    render() {
        console.log('this.state ALBUMS', this.state.albums);
        return(
            <View>
                {this.renderAlbums()}
            </View>
        )
    };
}
export default AlbumList;