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

            <View style={[styles.miniContainer]}>
                <Text style={styles.text}>My</Text>
                <Text style={styles.text}>Cookbook</Text>
            </View>

            <View style={styles.btnContainer}>
                <Separator />

                <Pressable
                    style={({ pressed, hovered, focused }) => [
                        {
                            backgroundColor: pressed ? 'backgroundColor: "rgba(0, 1, 0, 0.32)' : null,
                        },
                        styles.btnPressMe,
                    ]}
                    onPress={() => navigation.push("Recipes", { type: "Salads" })}>
                    {({ pressed }) => (
                        <Text style={pressed ? styles.btnTextPressed : styles.btnText}>
                            {pressed ? 'Salads' : 'Salads'}
                        </Text>)}
                </Pressable>

                <Separator />

                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'backgroundColor: "rgba(0, 1, 0, 0.32)' : null,
                        },
                        styles.btnPressMe,
                    ]}
                    onPress={() => navigation.push("Recipes", { type: "Soups" })}>
                    {({ pressed }) => (
                        <Text style={pressed ? styles.btnTextPressed : styles.btnText}>
                            {pressed ? 'Soups' : 'Soups'}
                        </Text>)}
                </Pressable>

                <Separator />

                <Pressable

                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'backgroundColor: "rgba(0, 1, 0, 0.32)' : null,
                        },
                        styles.btnPressMe,
                    ]}
                    onMouseI
                    onPress={() => navigation.push("Recipes", { type: "Main Dishes" })}>
                    {({ pressed }) => (
                        <Text style={pressed ? styles.btnTextPressed : styles.btnText}>
                            {pressed ? 'Main Dishes' : 'Main Dishes'}
                        </Text>)}
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'backgroundColor: "rgba(0, 1, 0, 0.32)' : null,
                        },
                        styles.btnPressMe,
                    ]}
                    onPress={() => navigation.push("Recipes", { type: "Desserts" })}>
                                        {({ pressed }) => (
                        <Text style={pressed ? styles.btnTextPressed : styles.btnText}>
                            {pressed ? 'Desserts' : 'Desserts'}
                        </Text>)}
                </Pressable>

                <Separator />

                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'backgroundColor: "rgba(0, 1, 0, 0.32)' : null,
                        },
                        styles.btnPressMe,
                    ]}
                    onPress={() => navigation.push("Recipes", { type: "Vegetables" })}>
                                        {({ pressed }) => (
                        <Text style={pressed ? styles.btnTextPressed : styles.btnText}>
                            {pressed ? 'Vegatables' : 'Vegetables'}
                        </Text>)}
                </Pressable>

                <Separator />

                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'backgroundColor: "rgba(0, 1, 0, 0.32)' : null,
                        },
                        styles.btnPressMe,
                    ]}
                    onPress={() => navigation.push("Recipes", { type: "Holidays" })}>
                                        {({ pressed }) => (
                        <Text style={pressed ? styles.btnTextPressed : styles.btnText}>
                            {pressed ? 'Holidays' : 'Holidays'}
                        </Text>)}
                </Pressable>

                <Separator />

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
        opacity: 0.8,
        //justifyContent:"center",
        alignItems: "center"
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

    btnTextPressed: {
        color: "#daa520",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
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
    },

    separator: {
        marginVertical: 1,
    },

    btnPressMe: {
        paddingVertical: 10,
        paddingLeft: 40,
        width: 300,
        textAlign: "center",
        borderRadius: 20
    },

    btnAddNew: {
        paddingVertical: 10,
        alignSelf: "center",
        backgroundColor: "rgba(0, 1, 0, 0.32)",
        width: 300,
        borderRadius: 30,
        borderColor: "gray",
        borderWidth: 1
    },

})

export default HomeScreen