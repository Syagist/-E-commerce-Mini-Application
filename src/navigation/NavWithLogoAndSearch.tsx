import React from 'react';
import {TouchableOpacity, View} from "react-native";
import SearchIcon from "@/components/icons/SearchIcon";
import {appNavigator} from "@/styles/appNavigator";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import ArrowIcon from "@/components/icons/ArrowIcon";
import {COLOR_BLACK} from "@/constants/Colors";
import LogoIcon from "@/components/icons/LogoIcon";

const NavWithLogoAndSearch = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSearchPage = () => {
        navigation.navigate('Search');
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