import React, {useEffect, useState} from 'react';
import {Image, Text, View} from "react-native";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import {globalStyles} from "@/styles/globalStyles";
import InputText from "@/components/form/InputText";
import {login} from "@/styles/sreens/login";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        console.log('login')
    }


    return (
        <View style={globalStyles.container}>
            <View style={login.container}>
                <View style={login.input_wrapper}>
                    <Text style={login.title}>
                        Login
                        {email}
                        { password}
                    </Text>
                    {/*<Logo width={120} height={40} />*/}
                    <Image style={login.logo} source={require('@/assets/images/banner/banner1.jpg')}/>
                </View>
                <View style={login.input_wrapper}>
                    <View style={login.input_wrapper}>
                        <InputText
                            label='Username'
                            type='text'
                            required={true}
                            onChange={(value) => setEmail(value)}/>
                    </View>
                    <View style={login.input_wrapper}>
                        <InputText
                            label='Password'
                            type='password'
                            required={true}
                            onChange={(value) => setEmail(value)}
                        />
                    </View>
                </View>

                <View style={login.input_wrapper}>
                    <ButtonPrimary text='Login' onPress={loginUser}/>
                </View>
            </View>
        </View>
    );
};

export default Login;