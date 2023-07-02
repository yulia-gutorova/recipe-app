import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

//---------------------------------------------------------
const HomeScreen = ({ navigation }) => {

    //=====================================================
    return (
        <ImageBackground
                source={require('../assets/home-image.png')}
                style={styles.container} >

            <View   style={[styles.miniContainer]}>
                <Text style={styles.text}>My</Text>
                <Text style={styles.text}>Cookbook</Text>
            </View>

            <View style={styles.btnContainer}>
                        <Separator/>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes", {type: "Salads", path: "'../assets/vegetables-image.png'"})}>
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
                            onPress={() => navigation.push("Recipes",  {type: "Main Dishes"})}>
                            <Text style={styles.btnText}>Main Dishes</Text>
                        </Pressable>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes" , {type: "Desserts"})}>
                            <Text style={styles.btnText}>Desserts</Text>
                        </Pressable>

                        <Separator/>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes", {type: "Vegetables"} )}>
                            <Text style={styles.btnText}>Vegetables</Text>
                        </Pressable>

                        <Separator/>

                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Recipes", {type: "Holidays"})}>
                            <Text style={styles.btnText}>Holidays</Text>
                        </Pressable>

                        <Separator/>
                        
                        <Pressable
                            style={[styles.btnAddNew,]}
                            onPress={() => navigation.push("AddNew")}>
                            <Text style={styles.addNewText}><Ionicons name="md-flower-sharp" size={20} color="#ff4500" /> ADD NEW RECIPE </Text>
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
        opacity: 0.8   
    },

    miniContainer: {
        flex: 0.5,
        width: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    text: {
        fontSize: 36,
        color: "green",
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: 100,
        marginTop: 10,
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },

    btnText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        marginLeft: 60,
        width: "80%"
    },

    addNewText: {
        color: "green",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'white',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        alignSelf: "center",
        //width: "80%"
    },
    separator: {
        marginVertical: 1,
    },

    btnPressMe: {
        paddingVertical: 10,
        paddingLeft: 100,
    },
    
    btnAddNew: {
        paddingVertical: 10,
        //paddingLeft: 100,
        alignSelf: "center",
        backgroundColor: "rgba(0, 1, 0, 0.32)",
        width: 300,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1
    },

})

export default HomeScreen