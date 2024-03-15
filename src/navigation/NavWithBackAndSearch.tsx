import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import SearchIcon from "@/components/icons/SearchIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";
import {appNavigator} from "@/styles/appNavigator";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {COLOR_BLACK} from "@/constants/Colors";

interface NavWithBackAndSearch {
    title: string,
}

const NavWithBackAndSearch = ({title}: NavWithBackAndSearch) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSearchPage = () => {
        navigation.navigate('Search');
    }
    return (
        <View  style={appNavigator.nav_with_back_and_search}>
            <TouchableOpacity style={appNavigator.back_button} onPress={()=>{
                navigation.goBack()
            }}>
                <ArrowIcon color={COLOR_BLACK}/>
            </TouchableOpacity>
            <Text style={appNavigator.content}>{title}</Text>
            <TouchableOpacity style={appNavigator.search_button} onPress={navigateToSearchPage}>
                <SearchIcon/>
            </TouchableOpacity>
        </View>
    );
};

export default NavWithBackAndSearch;