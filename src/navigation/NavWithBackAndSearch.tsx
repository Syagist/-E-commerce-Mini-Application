import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import SearchIcon from "@/components/icons/SearchIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";
import {appNavigator} from "@/styles/appNavigator";

interface NavWithBackAndSearch {
    title: string,
    onBackPress: () => void
}

const NavWithBackAndSearch = ({title, onBackPress}: NavWithBackAndSearch) => {
    const navigateToSearchPage = () => {
        
    }
    return (
        <View  style={appNavigator.nav_with_back_and_search}>
            <TouchableOpacity style={appNavigator.back_button} onPress={onBackPress}>
                <ArrowIcon/>
            </TouchableOpacity>
            <Text  style={appNavigator.content}>{title}</Text>
            <TouchableOpacity style={appNavigator.search_button} onPress={navigateToSearchPage}>
                <SearchIcon/>
            </TouchableOpacity>
        </View>
    );
};

export default NavWithBackAndSearch;