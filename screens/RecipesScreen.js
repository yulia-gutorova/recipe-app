import React from 'react';
import { useState, useCallback, useEffect } from "react"
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
import {API_URL} from "@env"

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
            const getAllRecipes = async (type) => {
                console.log("In get all recipes function");
                const resp = await axios.get(API_URL)
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

    //-----------------------------------------------------
    //useEffect to get all recipes when loading CraftScreen
    //-----------------------------------------------------
    useEffect(() => 
    { 
        const getAllRecipes = async (type) => {
            console.log("In get all recipes function");
            const resp = await axios.get(API_URL)
                .then(resp => {
                    console.log("Responce");
                    console.log(resp.data);
                    setRecipes(resp.data);
                })

                .catch((error) => console.log('Error: ', error));
        };
        getAllRecipes(type);

    }, []);
    //-----------------------------------------------------


    let type = route.params.type;
    const [recipes, setRecipes] = useState([]);
    const isFocused = useIsFocused();

    let typeRecipes = recipes.filter(item => item.type === type);

    let url = '';

    switch (type) {
        case "Salads"     : url = require('../assets/salad-background.png');
                            break;
        case "Soups"      : url = require('../assets/soup-background.png');
                            break;
        case "Desserts"   : url = require('../assets/desserts-background.png');
                            break;
        case "Vegetables" : url = require('../assets/vegetables-background.png');
                            break;
        case "Main Dishes": url = require('../assets/main-dishes-background.png');
                            break;
        case "Holidays"   : url = require('../assets/holidays-background.png');
                            break;
        default           : url = require('../assets/holidays-background.png');
    } 

    //=====================================================
    return (
        <ImageBackground style={styles.container} source={url}>

            <View style={styles.insideContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.text}>{type}</Text>
                </View>

                <View style={styles.flatlistContainer}>
                    {typeRecipes.length === 0 ? <Text style={styles.text}>You still don't have any  recipes here.</Text> : null}
                    <FlatList
                        style={styles.flatlist}
                        keyExtractor={item => item._id}
                        data={typeRecipes}
                        showsVerticalScrollIndicator
                        renderItem={({ item }) => {
                            return (<>
                                <Pressable onPress={() => navigation.navigate("RecipeDetail", { title: item.name, recipe: { item } })}>
                                    <OneRecipe key={item._id} recipe={{ item }} />
                                </Pressable>
                            </>
                            )
                        }
                        }
                    />

                </View>

            </View>

            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btnPressMe}
                    onPress={() => navigation.push("Home")}>
                    <Text style={styles.btnText}><Entypo name="arrow-bold-left" size={24} color="#daa520" /> Home</Text>
                </Pressable>
            </View>

        </ImageBackground>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: "rgba(237, 230, 224, 0.83)",
        //width: "100%",
        resizeMode: "cover"
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
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 10,
        backgroundColor: "rgba(0, 1, 0, 0.32)",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 30,
    },

    flatlistContainer: {
        flex: 1,
        paddingTop: 8,
        //backgroundColor: "black",
        width: "100%",
        alignItems: 'center',
        //justifyContent: 'center',
        //borderColor: "white",
        //borderWidth: 1
    },

    insideContainer: {
        flex: 0.9,
        //paddingTop: 8,
        //backgroundColor: "black",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 220
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