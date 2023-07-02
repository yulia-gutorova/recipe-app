import {View, Text, StyleSheet} from "react-native"

const Ingredients = ({ ing }) => {
    return (
        ing.map((ingredient, index) =>
        (
            <View style={styles.oneIngredient}>
                <Text key={index} style={styles.oneIngredientText}>{ingredient}</Text>
            </View>
        ))
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    oneIngredient: {
        marginVertical: 5,
    },

    oneIngredientText: {
        fontSize: 16
    },
})

export default Ingredients