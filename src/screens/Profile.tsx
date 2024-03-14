import React from 'react';
import {Text, View} from "react-native";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import {logoutUser} from "@/store/slices/authSlice";
import {useAppDispatch} from "@/store/store";

const Profile = () => {
    const dispatch = useAppDispatch();

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