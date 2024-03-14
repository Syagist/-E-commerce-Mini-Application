import React from 'react';
import {Text, View} from "react-native";
import {login} from "@/styles/sreens/login";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import {useDispatch} from "react-redux";
import {loginUser, logout, logoutUser} from "@/store/slices/authSlice";

const Profile = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <View>
            <Text>Profile</Text>

            <View >
                <ButtonPrimary text='Logout' onPress={handleLogout}/>
            </View>

        </View>
    );
};

export default Profile;