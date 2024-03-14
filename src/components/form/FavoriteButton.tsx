import React from 'react';
import {TouchableOpacity} from 'react-native';
import {favoriteButton} from "@/styles/components/favoriteButton";
import FavoriteIcon from "@/components/icons/FavoriteIcon";
import FavoriteFilledIcon from "@/components/icons/FavoriteFilledIcon";

interface FavoriteButtonProps {
    isFavorite: boolean;
    onPress: () => void
}

const FavoriteButton = ({isFavorite, onPress}: FavoriteButtonProps) => {
    return (
        <TouchableOpacity style={favoriteButton.button} onPress={onPress}>
            { isFavorite  ? <FavoriteFilledIcon /> : <FavoriteIcon />}
        </TouchableOpacity>
    );
};


export default FavoriteButton;
