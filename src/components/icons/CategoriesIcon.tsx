import React from 'react';
import Svg, {Path} from 'react-native-svg';


const CategoriesIcon = ({ color = "#CACACA" }) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
                d="M2 10V2H10V10H2ZM4 8H8V4H4V8ZM2 22V14H10V22H2ZM4 20H8V16H4V20ZM14 10V2H22V10H14ZM16 8H20V4H16V8ZM14 22V14H22V22H14ZM16 20H20V16H16V20Z"
                fill={color}/>
        </Svg>


    );
};

export default CategoriesIcon;