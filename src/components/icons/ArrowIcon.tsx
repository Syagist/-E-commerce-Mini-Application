import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon = ({color = "#CACACA"}) => {
    return (
        <Svg viewBox="0 0 24 24" fill="none">
            <Path d="M16 22L6 12L16 2L17.775 3.775L9.55 12L17.775 20.225L16 22Z" fill={color}/>
        </Svg>
    );
};

export default ArrowIcon;