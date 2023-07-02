import {Text, StyleSheet, View} from "react-native"
import { AntDesign } from '@expo/vector-icons';

const Rates = ({ r }) => {
    let stars = [];
    for (var i = 0; i < r; i++) {
        stars = stars.concat(<AntDesign name="star" size={24} color="#daa520" />);
    };
    //=====================================================
    return(<Text>{stars}</Text>)
}

export default Rates