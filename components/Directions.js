import {Text, StyleSheet, View} from "react-native"

const Directions = ({ dir }) => {
    return (
        <View style={styles.oneIngredient}>
            <Text style={styles.directionText}>{dir}</Text>
        </View>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    directionText: {
        fontSize: 18,
        marginHorizontal: 10,
        paddingTop: 10
    },
})

export default Directions