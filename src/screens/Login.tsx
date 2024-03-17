import React, {useState} from 'react';
import {Text, View} from "react-native";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import {globalStyles} from "@/styles/globalStyles";
import InputText from "@/components/form/InputText";
import {login} from "@/styles/sreens/login";
import {loginUser} from "@/store/slices/authSlice";
import LogoIcon from "@/components/icons/LogoIcon";
import {useAppDispatch} from "@/store/store";
import {useLoader} from "@/context/LoaderProvider";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const {showLoader, hideLoader} = useLoader();


    const handleLogin = async () => {
        try {
            showLoader()
             dispatch(loginUser(userName, password)).then((data) => {
                hideLoader();
            });
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={globalStyles.container}>
            <View style={login.container}>
                <View style={login.input_wrapper}>
                    <Text style={login.title}>
                        Login
                    </Text>
                    <View style={login.logo_wrapper}>
                        <View style={login.logo}>
                            <LogoIcon/>
                        </View>
                    </View>
                </View>
                <View style={login.input_wrapper}>
                    <View style={login.input_wrapper}>
                        <InputText
                            label='Username  (kminchelle)'
                            type='text'
                            required={true}
                            onChange={(value) => setUserName(value)}/>
                    </View>
                    <View style={login.input_wrapper}>
                        <InputText
                            label='Password (0lelplR)'
                            type='password'
                            required={true}
                            onChange={(value) => setPassword(value)}
                        />
                    </View>
                </View>

                <View style={login.input_wrapper}>
                    <ButtonPrimary text='Login' onPress={handleLogin}/>
                </View>
            </View>
        </View>
    );
};

export default Login;