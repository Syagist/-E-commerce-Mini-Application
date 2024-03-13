import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {inputText} from "@/styles/components/form/inputText";

interface TextInputProps {
    label: string;
    type: string
    required: boolean
    onChange: (value: string) => void
}

const InputText = ({label, type, required, onChange}: TextInputProps) => {
    return (
        <View style={inputText.wrapper}>
            <Text style={inputText.label}>
                {label}
                {required && <Text style={inputText.required_mark}>*</Text>}

            </Text>
            <TextInput secureTextEntry={type === 'password'}
                       style={inputText.input}
                       onChangeText={onChange}/>
        </View>
    );
};

export default InputText;
