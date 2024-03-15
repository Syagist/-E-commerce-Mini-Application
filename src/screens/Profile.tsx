import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {logoutUser} from "@/store/slices/authSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {globalStyles} from "@/styles/globalStyles";
import {profile} from "@/styles/sreens/profile";
import LogoutIcon from "@/components/icons/LogoutIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";

const Profile = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.auth.userData);

    useEffect(() => {
        console.log(user)
    }, [user]);

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
            <View style={globalStyles.container}>
                <View style={profile.profile_wrapper}>
                    <View style={profile.profile_info_wrapper}>
                        <Image src={user.image} style={profile.profile_image}/>
                        <View style={profile.profile_info}>
                            <Text style={profile.profile_name}>{user.firstName} {user.lastName}</Text>
                            <Text style={profile.profile_gender}>{user.gender}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={profile.logout_btn} onPress={handleLogout}>
                        <View style={profile.btn_icon}>
                            <LogoutIcon/>
                        </View>
                        <Text style={profile.btn_text}>Log Out</Text>
                        <View style={profile.btn_arrow}>
                            <ArrowIcon/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

    );
};

export default Profile;