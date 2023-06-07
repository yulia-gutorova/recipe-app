import { LinearGradient } from "expo-linear-gradient";
import React, {useEffect, useRef, useState} from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
} from "react-native";

const Separator = () => <View style={styles.separator} />;
import RecipesScreen from "../screens/RecipesScreen";

const HomeScreen = ({ navigation }) => {

    //const [type, setType] = useState('');

    return (
        <ImageBackground
                source={require('../assets/home-image.png')}
                style={styles.container} >

            <View   style={[styles.miniContainer,           
/*                              {
                                transform: [{skewX: '40deg'}, {skewY: '30deg'},],
                              }, */
                          ]}>

                <Text style={styles.text}>My</Text>
                <Text style={styles.text}>Cookbook</Text>

            </View>

            <View style={styles.btnContainer}>

                        <Separator/>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes")}>
                            <Text style={styles.btnText}>Salads</Text>
                        </Pressable>

                        <Separator/>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes", {type: "Soups"})}>
                            <Text style={styles.btnText}>Soups</Text>
                        </Pressable>

                        <Separator/>


                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes")}>
                            <Text style={styles.btnText}>Main Dishes</Text>
                        </Pressable>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes")}>
                            <Text style={styles.btnText}>Desserts</Text>
                        </Pressable>

                        <Separator/>


                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes")}>
                            <Text style={styles.btnText}>Vegetables</Text>
                        </Pressable>

                        <Separator/>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes")}>
                            <Text style={styles.btnText}>Holidays</Text>
                        </Pressable>

                        <Separator/>
                        
                        <Pressable
                            style={[styles.btnPressMe,]}
                            onPress={() => navigation.push("AddNew")}>
                            <Text style={[styles.btnText, {color: "#daa520", marginLeft: 100}]}><Ionicons name="md-flower-sharp" size={20} color="#ff4500" /> ADD NEW</Text>
                        </Pressable>
            </View>


        </ImageBackground>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        resizeMode: "cover"
    },

    btnContainer: {
        flex: 1,
        width: "100%",
        //alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: "rgba(71, 53, 29, 0.83)",
        //backgroundColor: "rgba(74, 38, 0, 0.83)",
        //backgroundColor: "rgba(71, 32, 14, 0.83)",
        //borderTopLeftRadius: 300,
        //borderTopRightRadius: 100,
        opacity: 0.8   
    },

    miniContainer: {
        flex: 0.5,
        width: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },

    text: {
        fontSize: 36,
        color: "#daa520",
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: 100,
        marginTop: 10,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    btnText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginLeft: 60,
        //backgroundColor: "white",
        width: "80%"
    },

    separator: {
        marginVertical: 1,
    },

    btnPressMe: {
        //textAlign: "center",
        paddingVertical: 10,
        paddingLeft: 100,
        //backgroundColor: "gray",
        //borderColor: "black",
        //borderWidth: 1
    },


})

export default HomeScreen