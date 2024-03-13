import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {favoriteButton} from "@/styles/components/favoriteButton";
import favorite from '@/assets/icons/favorite.svg';

interface FavoriteButtonProps {
    isFavorite: boolean;
    onPress: () => void
}

const FavoriteButton = ({isFavorite, onPress}: FavoriteButtonProps) => {
    return (
        <TouchableOpacity style={favoriteButton.button} onPress={onPress}>
            { isFavorite  ? <Text>favorite</Text> : <Text>add favorite</Text>}

        </TouchableOpacity>
    );
};


export default FavoriteButton;
