import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import ArrowIcon from "@/components/icons/ArrowIcon";
import {appNavigator} from "@/styles/appNavigator";
import {COLOR_BLACK} from "@/constants/Colors";
import SearchIcon from "@/components/icons/SearchIcon";
import { fetchProductsByQuery} from "@/store/slices/productsSlice";
import {useAppDispatch} from "@/store/store";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";


const NavWithBackAndSearch = () => {
    const dispatch = useAppDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleSearch = async (query:string) => {
        await dispatch(fetchProductsByQuery({query}))
    };

    return (
        <View style={appNavigator.nav_with_back_and_search}>
            <TouchableOpacity style={appNavigator.back_button} onPress={()=>{
                navigation.goBack()
            }}>
                <ArrowIcon color={COLOR_BLACK}/>
            </TouchableOpacity>
            <View style={appNavigator.search_input_wrapper}>
                <TextInput
                    style={appNavigator.search_input}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                <View style={appNavigator.search_icon_wrapper}>
                    <SearchIcon/>
                </View>
            </View>

        </View>
    );
};

export default NavWithBackAndSearch;