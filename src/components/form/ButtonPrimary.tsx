import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonPrimary} from "@/styles/components/form/buttonPrimary";

interface ButtonPrimaryProps {
    text: string;
    onPress: () => void
}

const ButtonPrimary = ({text, onPress}: ButtonPrimaryProps) => {
    return (
        <TouchableOpacity style={buttonPrimary.button} onPress={onPress}>
            <Text style={buttonPrimary.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};


export default ButtonPrimary;
