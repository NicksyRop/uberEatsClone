import React from 'react';
import { Text, View } from 'react-native';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';

function Home(props) {
    return (
       <View>
        <HeaderTab/>
        <SearchBar/>
       </View>
    );
}

export default Home;