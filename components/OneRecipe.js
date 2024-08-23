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
         <View style={styles.horizontalLine} />
      </View>
        
        <View style={[styles.oneIngredient, { flexDirection: "row" }]}>
            <Rates key={recipe.item.rates} r={recipe.item.rates}></Rates>
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
    alignItems: "center",
  },

  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'rgba(215, 202, 190, 0.83)',
    backgroundColor: 'rgba(251, 236, 219, 0.46)',
    
    paddingVertical: 10,
    width: 300,
    borderRadius: 10,
    opacity: 0.8,
    marginTop: 20,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",

  },

  horizontalLine: {
    borderWidth: 0.5,
    borderColor: "black",
    width: 100,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});

export default OneRecipe