import { View, StyleSheet, Text, Image } from "react-native"
import React from "react"

const OneRecipe = ({ recipe, key }) => {
  
  //=====================================================
  return (
    <View key = {key} style={styles.item}>
        <Text style={styles.title} key={recipe.item._id}>{recipe.item.name}</Text>
        <Text style={styles.title} key={recipe.item._id}>{recipe.item.rates}</Text>
        <Text style={styles.title} key={recipe.item._id}>{recipe.item.tags}</Text>
    </View>
  )
};

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(215, 202, 190, 0.83)',
    paddingVertical: 10,
    width: 300,
    borderRadius: 10,
    opacity: 1,
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default OneRecipe