import React from 'react';
import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import HomeIcon from "@/components/icons/HomeIcon";
import CategoriesIcon from "@/components/icons/CategoriesIcon";
import FavoriteIcon from "@/components/icons/FavoriteIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import Categories from "@/screens/Categories";
import WishList from "@/screens/WishList";
import Profile from "@/screens/Profile";
import Home from "@/screens/Home";
import ProductDetail from "@/screens/ProductDetail";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {globalStyles} from "@/styles/globalStyles";
import {COLOR_PRIMARY} from "@/constants/Colors";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    const MainStack = () => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ProductDetail" component={ProductDetail}/>
            </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarActiveTintColor: COLOR_PRIMARY,
                    tabBarIcon: ({color}) => {
                        switch (route.name) {
                            case 'MainStack':
                                return <HomeIcon color={color}/>
                            case 'Categories':
                                return <CategoriesIcon color={color}/>
                            case 'WishList':
                                return <FavoriteIcon color={color}/>
                            case 'Profile':
                                return <ProfileIcon color={color}/>
                        }
                    },
                    tabBarLabel: ({color})=>{
                        return <Text
                            style={{
                                ...globalStyles.app_navigation_label,
                                color: color}}
                        >{route.name === "MainStack" ? "Home" : route.name}</Text>
                    }
                })}>
                <Tab.Screen name="MainStack" component={MainStack} />
                <Tab.Screen name="Categories" component={Categories}/>
                <Tab.Screen name="WishList" component={WishList}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>

        </NavigationContainer>
    );
};

export default AppNavigator;