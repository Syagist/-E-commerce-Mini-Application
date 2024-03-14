import React from 'react';
import {TouchableOpacity, View} from "react-native";
import SearchIcon from "@/components/icons/SearchIcon";
import {appNavigator} from "@/styles/appNavigator";
import LogoIcon from "@/components/icons/LogoIcon";

const NavWithLogoAndSearch = () => {
    const navigateToSearchPage = () => {
        
    }
    return (
        <View  style={appNavigator.nav_with_back_and_search}>
            <View style={appNavigator.logo}>
                <LogoIcon/>
            </View>
            <TouchableOpacity style={appNavigator.search_button} onPress={navigateToSearchPage}>
                <SearchIcon/>
            </TouchableOpacity>
        </View>
    );
};

export default NavWithLogoAndSearch;