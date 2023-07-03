import { View, StyleSheet, Text, Image } from "react-native"
import React from "react"
import Tags from "./Tags";
import Rates from "./Rates";

const OneRecipe = ({ recipe, key }) => {
  
  //=====================================================
  return (
    <View  key = {key} style={styles.item}>
      <View style={styles.titleContainer}>
         <Text style={styles.titleText} >{recipe.item.name}</Text>
      </View>
        
        <View style={[styles.oneIngredient, { flexDirection: "row" }]}>
            <Rates r={recipe.item.rates}></Rates>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Tags t={recipe.item.tags}></Tags>
        </View>
    </View>
  )
};

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
  titleContainer: {

  },

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

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",

  },
});

export default OneRecipe