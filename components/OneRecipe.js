import { View, StyleSheet, Text, Image } from "react-native"
import React from "react"
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const OneRecipe = ({ recipe }) => {
  console.log("Recipe");
  console.log(recipe);

  const handleEvent = (eventName) => {
    console.log(eventName);
  }

  return (
    <View style={styles.item}>
        <Text style={styles.title} key={recipe.item._id}>{recipe.item.name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(215, 202, 190, 0.83)',
    paddingVertical: 10,
    //margin: 20,
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