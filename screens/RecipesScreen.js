import React from 'react';
import { useState, useCallback} from "react"
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    FlatList,
    Image
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import axios from "axios";

import OneRecipe from "../components/OneRecipe";



//---------------------------------------------------------
const RecipesScreen = ({ navigation, route }) => {

    //-----------------------------------------------------
    //useFocusEffect to get all recipes when navigating 
    //to RecipeScreen
    //-----------------------------------------------------
        useFocusEffect(
            useCallback((type) => {
                console.log("inside useFocusEffect");
                console.log("Type outside");
                console.log(type);  
            const getAllRecipes = async (type) => 
            {
                console.log("In get all recipes function");
                const resp = await axios.get('https://recipe-app-server-production.up.railway.app/recipes')
                .then(resp => {       
                            console.log("Responce");
                                console.log(resp.data);
                                setRecipes(resp.data); 
                                })

                .catch((error) => console.log('Error: ', error));
            };  
            getAllRecipes(type);

            }, [isFocused])
      );
    //-----------------------------------------------------

        let type = route.params.type;
        const [recipes, setRecipes] = useState([]);
        const isFocused = useIsFocused();
            console.log("route.params.path");
            console.log(route.params.path);
        let path =  route.params.path;   

        let typeRecipes= recipes.filter(item => item.type === type);


    //=====================================================
    return (  
        <View style={styles.container}>
 
            <View style={styles.imageContainer}>
                {type === "Vegetables" ? <Image source={require('../assets/vegetables-image.png')}style={styles.image}></Image>: null}
                {type === "Soups" ? <Image source={require('../assets/soup-image.png')}style={styles.image}></Image>: null}
                {type === "Salads" ? <Image source={require('../assets/salad-image.png')}style={styles.image}></Image>: null}
                {type === "Main Dishes" ? <Image source={require('../assets/main-dishes-image.png')}style={styles.image}></Image>: null}
                {type === "Desserts" ? <Image source={require('../assets/desserts-image.png')}style={styles.image}></Image>: null}
                {type === "Holidays" ? <Image source={require('../assets/holidays-image.png')}style={styles.image}></Image>: null} 
            </View>


         <ImageBackground source={require('../assets/background-image.png')} style={styles.insideContainer}>

            <View style={styles.titleContainer}>
                <Text style={styles.text}>{type}</Text>
            </View>

        <View style={styles.flatlistContainer}>
        {typeRecipes.length === 0 ? <Text style={styles.text}>You still don't have any  recipes here.</Text> : null}
                <FlatList
                        style={styles.flatlist}
                        key={type}
                        keyExtractor={item => item.id}
                        data={typeRecipes}
                        showsVerticalScrollIndicator
                        renderItem={({ item }) => 
                        {   
                            return(<>
                                        <Pressable  onPress={() => navigation.navigate("RecipeDetail", {title: item.name, recipe:{item}})}>
                                            <OneRecipe key={item._id} title={item.name} recipe={{item}}/>       
                                        </Pressable> 
                            </>
                            )
                        }
                        }
                />
            
        </View>

            </ImageBackground>
            
            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btnPressMe}
                    onPress={() => navigation.push("Home")}>
                    <Text style={styles.btnText}><Entypo name="arrow-bold-left" size={24} color="#daa520"/> Home</Text>
                </Pressable>
            </View>

        </View>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(237, 230, 224, 0.83)",
        width: "100%",
    },

    btnContainer: {
        flex: 0.1,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.09)",
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    titleContainer: {
        flex: 0.2,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 10,
        backgroundColor: "rgba(0, 0, 0, 0.09)",
    },

    flatlistContainer:{
        flex: 1,
        paddingTop: 8,
        //backgroundColor: "black",
        width: "100%",
        alignItems: 'center',
        //justifyContent: 'center',
    },

    insideContainer:{
        flex: 0.9,
        paddingTop: 8,
        //backgroundColor: "black",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "cover"
    },

    imageContainer: {
        flex: 0.4,
        width: "100%", 
    },

    flatlist: {
        maxHeight: 300,
    },

    text: {
        fontSize: 24,
        color: "#daa520",
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "right",
        //marginTop: 15,
        marginTop: 10,
        marginBottom: 10,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    btnText: {
        color: "#daa520",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginLeft: 0,
    },

    btnPressMe: {
        paddingVertical: 10,
        paddingLeft: 120,
        paddingRight: 20,
    },

    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    }

})

export default RecipesScreen