import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
                <Banner/>
            </ScrollView>
        </View>

    );
};

export default Home;