import { useEffect, useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
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

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Separator = () => <View style={styles.separator} />;

const RecipeDetailScreen = ({ navigation, route }) => {

    const [ingredientsModalVisibility, setIngredientsModalVisibility] = useState(false);
    const [directionsModalVisibility, setDirectionsModalVisibility] = useState(false);

    console.log("Route params");
    console.log(route.params);
    let type = route.params.recipe.item.type;

    //const completedBookings = response.data.filter((booking: Booking) => booking.status === false);

    const Ingredients = ({ ing }) => {
        return (
            ing.map(ingredient =>
            (
                <View style={styles.oneIngredient}>
                    <Text style={styles.oneIngredientText}>{ingredient}</Text>
                </View>
            ))
        )
    }

    const Tags = ({ t }) => {
        return (
            t.map(tag=>
            (
                <>
                    <Text style={styles.oneTag}>{tag}</Text>
                </>
            ))
        )
    }

    const Directions= ({ dir }) => {
        return (
                <View style={styles.oneIngredient}>
                    <Text style={styles.directionText}>{dir}</Text>
                </View>
        )
    }

    const Rates= ({ r }) => {
        switch (r){
            case "3": return (
                        <View style={styles.oneIngredient}>
                            <Text><AntDesign name="star" size={24} color="#daa520" /><AntDesign name="star" size={24} color="#daa520" /><AntDesign name="star" size={24} color="#daa520" /></Text>
                        </View>
                        
        )
        }
            


    }


    return (
        <ImageBackground style={styles.container} source={require("../assets/recipes-image.png")}>
       {/* <View style={styles.container}> */}

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{route.params.recipe.item.name}</Text>
            </View>

            <View style={styles.detailContainer}>

                <View style={styles.descriptionDetailContainer}>
                    {/* <Text style={styles.detailText}>Id: {route.params.recipe.item._id}</Text> */}

                    <Text style={styles.detailText}>{route.params.recipe.item.description}</Text>

                    <Pressable
                        style={styles.btnGetProperties}
                        onPress={() => { setIngredientsModalVisibility(!ingredientsModalVisibility) }}>
                        <Text style={[styles.btnGetText, {color: "darkgray"}]}><AntDesign name="pluscircle" size={24} color="#daa520" /> Ingredients</Text>

                                <Modal style={styles.modalContainer}
                                    animationType={"fade"}
                                    transparent={true}
                                    visible={ingredientsModalVisibility}>

                                    {/*All views of Modal*/}
                                    <View style={styles.modal}>
                                        <Text style={styles.titleText}>Ingredients:</Text>

                                        <ScrollView style={styles.ingredientsContainer}>
                                            <Ingredients ing={route.params.recipe.item.ingredients}></Ingredients>
                                        </ScrollView>

                                        <Button title="Close"
                                            color="gray"
                                            onPress={() => { setIngredientsModalVisibility(!ingredientsModalVisibility) }} />
                                    </View>
                                </Modal>
           
                    </Pressable>

                    <Pressable
                        style={styles.btnGetProperties}
                        onPress={() => { setDirectionsModalVisibility(!directionsModalVisibility) }}>
                        <Text style={[styles.btnGetText, {color:"darkgray"}]}><AntDesign name="pluscircle" size={24} color="#daa520" /> Directions</Text>

                                <Modal style={styles.modalContainer}
                                    animationType={"fade"}
                                    transparent={true}
                                    visible={directionsModalVisibility}>

                                    {/*All views of Modal*/}
                                    <View style={styles.modal}>
                                        <Text style={styles.titleText}>Directions:</Text>

                                        <ScrollView style={styles.directionsContainer} showsVerticalScrollIndicator={true}>
                                            <Directions dir={route.params.recipe.item.directions}></Directions>
                                        </ScrollView>

                                        <Button title="Close"
                                            color="gray"
                                            onPress={() => { setDirectionsModalVisibility(!directionsModalVisibility) }} />
                                    </View>
                                </Modal>

           
                    </Pressable>


                    <Text style={styles.detailText}>Cook time:  {route.params.recipe.item.cookTime} min</Text>
                    <Text style={styles.detailText}>Calories:  {route.params.recipe.item.calories}</Text>

                    <View style={{flexDirection: "row"}}>
                      <Tags t={route.params.recipe.item.tags}></Tags>
                    </View>

                    <View style={{flexDirection: "row"}}>
                      <Rates r="3"></Rates>
                    </View>

                    {/* <Ingredients ing={route.params.recipe.item.ingredients}></Ingredients> */}
                    {/*                    
                    <Text style={styles.detailText}>Rates:  {route.params.recipe.item.rates}</Text>
                            () => navigation.navigate("RecipeDetail", {title: item.name, recipe:{item}})
 */}
                    <View style={styles.buttonsDetailContainer}>
                        <Pressable
                            style={styles.btnDetailContainer}
                            onPress={() => navigation.push("Home")}>
                            <Text style={[styles.btnText, { color: "#daa520" }]}>Update </Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnDetailContainer}
                            onPress={() => navigation.push("Home")}>
                            <Text style={[styles.btnText, { color: "#daa520" }]}>Delete</Text>
                        </Pressable>

                    </View>


                </View>

            </View>

            <View style={styles.btnContainer}>
                <Pressable
                    style={styles.btnBack}
                    onPress={() => navigation.navigate("Recipes", { title: type })}>
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
        backgroundColor: "rgba(132, 160, 140, 0.53)",
        alignItems: 'flex-end',
        justifyContent: 'center',
        //backgroundColor: "gray",
    },

    //-------------------------------------------------------------
    titleContainer: {
        flex: 1,
        width: "100%",

        paddingTop: 0,
        backgroundColor: "rgba(132, 160, 140, 0.53)",
        //borderBottomRightRadius: 500,
        //borderBottomLeftRadius: 200,
        //opacity: 0.8
    },

    //-------------------------------------------------------------
    detailContainer: {
        flex: 6,
        //backgroundColor: "white",
        marginVertical: 20,
        borderRadius: 20,
        width: "90%",
        //alignItems: 'center',
        //opacity: 0.8
    },

    descriptionDetailContainer: {
        flex: 1,
        backgroundColor: "rgba(176, 165, 154, 0.83)",
        //marginVertical: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: "100%",
        //alignItems: 'center',
        //opacity: 0.8
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
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //-------------------------------------------------------------
    oneIngredient: {
        marginVertical: 5,
    },

    oneIngredientText: {
        fontSize: 16
    },

    directionText: {
        fontSize: 18,
        marginHorizontal: 10, 
        paddingTop: 10
    },

    oneTag: {
        backgroundColor: "gray",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        margin: 5
    },
    titleText: {
        fontSize: 24,
        color: "#daa520",
        fontStyle: "italic",
        fontWeight: "bold",
        //backgroundColor: "white",
        textAlign: "left",
        marginTop: 25,
        marginLeft: 10,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    detailText: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        fontStyle: "italic",
        //marginLeft: 20,
        ///textAlign: "left",
        margin: 10,
        //textShadowOffset: { width: 1, height: 1 },
        //textShadowRadius: 5,

    },

    btnText: {
        color: "#daa520",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginLeft: 0,
        //backgroundColor: "white",
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
        backgroundColor: "rgba(177, 167, 156, 0.73)",
        borderRadius: 20,
        shadowColor: 'red',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
        paddingLeft: 120,
        paddingRight: 20,
        //backgroundColor: "gray"
    },

    modal: {
        flex: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "rgba(176, 165, 154, 0.83)", 
        backgroundColor: "rgba(176, 165, 153, 1)", 
        width: '95%',
        marginLeft: 10,
        marginTop: 75,
        borderRadius: 10,
        borderWidth: 1,
        //borderColor: '#daa520',
        borderColor: "white",
        opasity: 0
    }

})

export default RecipeDetailScreen