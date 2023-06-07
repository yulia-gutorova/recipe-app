import {View, Text, StyleSheet} from "react-native"

const Ingredients = ({ ing }) => {
    return (
        ing.map(ingredient =>
        (
            <View style={styles.oneIngredient}>
                <Text style={styles.oneIngredientText}>{ingredient}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    oneIngredient: {
        marginVertical: 5,
    },

    oneIngredientText: {
        fontSize: 16
    },
})

export default Ingredients