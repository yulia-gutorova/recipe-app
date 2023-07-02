import { useState } from "react"
import axios from "axios";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
    ImageBackground,
    Modal,
    Button,
    ScrollView
} from "react-native";

import Ingredients from "../components/Ingredients";
import Tags from "../components/Tags";
import Directions from "../components/Directions";
import Rates from "../components/Rates";

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


//---------------------------------------------------------
const RecipeDetailScreen = ({ navigation, route }) => {
    const [ingredientsModalVisibility, setIngredientsModalVisibility] = useState(false);
    const [directionsModalVisibility, setDirectionsModalVisibility] = useState(false);

    console.log("Route params");
    console.log(route.params);
    let recipe = route.params.recipe.item;
    let type = route.params.recipe.item.type;

    //---------------------------------------------------------
    const handleDeleteRecipe = (id) => {
        console.log(id);

        //---------------------------------------------------------
        const deleteRecipe = async () => {
            let url = 'https://recipe-app-server-production.up.railway.app/recipes/' + id;
            const resp = await axios.delete(url)
                .then()
                .catch((error) => console.log('Error: ', error));
        };

        deleteRecipe(id);
        navigation.navigate("Recipes", { type: type });
    }


    //=====================================================
    return (
        <ImageBackground style={styles.container} source={require("../assets/recipes-image.png")}>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{route.params.recipe.item.name}</Text>
            </View>

            <View style={styles.detailContainer}>

                <View style={styles.descriptionDetailContainer}>

                    <Text style={styles.detailText}>{route.params.recipe.item.description}</Text>
                    <Text style={styles.detailText}>Cook time:  {route.params.recipe.item.cookTime} min</Text>
                    <Text style={styles.detailText}>Calories:  {route.params.recipe.item.calories}</Text>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Tags t={route.params.recipe.item.tags}></Tags>
                    </View>

                    <View style={[styles.oneIngredient, { flexDirection: "row" }]}>
                        <Rates r={route.params.recipe.item.rates}></Rates>
                    </View>

                    <Pressable
                        style={styles.btnGetProperties}
                        onPress={() => { setIngredientsModalVisibility(!ingredientsModalVisibility) }}>

                        <Text style={[styles.btnGetText, { color: "darkgray" }]}><AntDesign name="pluscircle" size={24} color="#daa520" /> Ingredients</Text>
                        
                        <Modal style={styles.modalContainer}
                            animationType={"fade"}
                            transparent={true}
                            visible={ingredientsModalVisibility}>

                            <View style={styles.modal}>
                                <Text style={styles.titleText}>Ingredients:</Text>

                                <ScrollView style={styles.ingredientsContainer}>
                                    <Ingredients ing={route.params.recipe.item.ingredients}></Ingredients>
                                </ScrollView>

                                <Pressable
                                    style={styles.btnModal}
                                    onPress={() => { setIngredientsModalVisibility(!ingredientsModalVisibility) }}>
                                    <Text style={[styles.btnModalText]}>Close</Text>
                                </Pressable>
                            </View>
                        </Modal>

                    </Pressable>

                    <Pressable
                        style={styles.btnGetProperties}
                        onPress={() => { setDirectionsModalVisibility(!directionsModalVisibility) }}>

                        <Text style={[styles.btnGetText, { color: "darkgray" }]}><AntDesign name="pluscircle" size={24} color="#daa520" /> Directions</Text>

                        <Modal style={styles.modalContainer}
                            animationType={"fade"}
                            transparent={true}
                            visible={directionsModalVisibility}>

                            <View style={styles.modal}>
                                <Text style={styles.titleText}>Directions:</Text>

                                <ScrollView style={styles.directionsContainer} showsVerticalScrollIndicator={true}>
                                    <Directions dir={route.params.recipe.item.directions}></Directions>
                                </ScrollView>

                                <Pressable
                                    style={styles.btnModal}
                                    onPress={() => { setDirectionsModalVisibility(!directionsModalVisibility) }}>
                                    <Text style={[styles.btnModalText]}>Close</Text>
                                </Pressable>
                            </View>
                        </Modal>

                    </Pressable>

                    <View style={styles.buttonsDetailContainer}>
                        <Pressable
                            style={styles.btnDetailContainer}
                            onPress={() => navigation.navigate("Update", { recipe: { recipe } })}>
                            <Text style={[styles.btnText, { color: "#daa520" }]}>Update</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnDetailContainer}
                            onPress={() => handleDeleteRecipe(route.params.recipe.item._id)}>
                            <Text style={[styles.btnText, { color: "#daa520" }]}>Delete</Text>
                        </Pressable>
                    </View>

                </View>

            </View>

            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btnBack}
                    onPress={() => navigation.navigate("Recipes", { type: type })}>
                    <Text style={styles.btnText}><Entypo name="arrow-bold-left" size={24} color="#daa520" /> Recipes</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    //-------------------------------------------------------------
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",

    },

    //-------------------------------------------------------------
    btnContainer: {
        flex: 1,
        width: "100%",
        //alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: "rgba(71, 53, 29, 0.83)",
        //backgroundColor: "rgba(74, 38, 0, 0.83)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: 'flex-end',
        justifyContent: 'center',
        //backgroundColor: "gray",
    },

    //-------------------------------------------------------------
    titleContainer: {
        flex: 1,
        width: "100%",
        paddingTop: 0,
        //backgroundColor: "rgba(132, 160, 140, 0.53)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        //borderBottomRightRadius: 500,
        //borderBottomLeftRadius: 200,
        //opacity: 0.8
    },

    //-------------------------------------------------------------
    detailContainer: {
        flex: 6,
        marginVertical: 20,
        borderRadius: 20,
        width: "90%",
    },

    descriptionDetailContainer: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
    },

    buttonsDetailContainer: {
        flexDirection: "row"
    },

    ingredientsContainer: {
        marginVertical: 20,
    },

    directionsContainer: {
        marginVertical: 20,
    },


    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //-------------------------------------------------------------

    directionText: {
        fontSize: 18,
        marginHorizontal: 10,
        paddingTop: 10
    },


    titleText: {
        fontSize: 24,
        color: "#daa520",
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "left",
        marginTop: 25,
        marginLeft: 10,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    detailText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        fontStyle: "italic",
        margin: 8,
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

    separator: {
        marginVertical: 20,
    },

    btnDetailContainer: {
        marginTop: 10,
        paddingVertical: 20,
        paddingLeft: 10,
        paddingRight: 10,
        gap: 10
    },

    btnGetProperties: {
        width: 200,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "rgba(89, 160, 27, 0.5)",
        borderRadius: 20,
        shadowColor: 'red',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        margin: 10
    },

    btnGetText: {
        color: "#daa520",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnBack: {
        paddingVertical: 20,
        paddingLeft: 50,
        paddingRight: 20,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
    },

    modal: {
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(176, 165, 153, 1)",
        width: '95%',
        marginLeft: 10,
        marginTop: 75,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
        opasity: 0
    },

    btnModal: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        margin: 20,
        borderRadius: 35
    },

    btnModalText: {
        color: "#daa520",
        fontSize: 20,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default RecipeDetailScreen