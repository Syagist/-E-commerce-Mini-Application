import React, {useEffect} from 'react';
import {Text, View} from "react-native";
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
import Products from "@/screens/Products";
import Login from "@/screens/Login";
import {loadUserData} from "@/store/slices/authSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import NavWithBackAndSearch from "@/navigation/NavWithBackAndSearch";
import NavWithLogoAndSearch from "@/navigation/NavWithLogoAndSearch";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.auth.userData);

    useEffect(() => {
        dispatch(loadUserData());
    }, [dispatch]);

    const MainStack = () => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <NavWithLogoAndSearch  /> }}/>
                <Stack.Screen name="ProductDetail" component={ProductDetail}/>
                <Stack.Screen name="Products" component={Products}/>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        );
    };
    if (!user) {
        return <Login/>;
    }

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
                    tabBarLabel: ({color}) => {
                        return <Text
                            style={{
                                ...globalStyles.app_navigation_label,
                                color: color
                            }}
                        >{route.name === "MainStack" ? "Home" : route.name}</Text>
                    }
                })}>
                <Tab.Screen name="MainStack" component={MainStack} options={{ headerTitle: () => <View style={{height:0}}></View> }}/>
                <Tab.Screen name="Categories" component={Categories} options={{ headerTitle: () => <NavWithBackAndSearch title='Categorories' onBackPress={()=>{}} /> }}/>
                <Tab.Screen name="WishList" component={WishList}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>

        </NavigationContainer>
    );
};

export default AppNavigator;