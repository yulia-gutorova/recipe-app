import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    ScrollView,
    KeyboardAvoidingView, 
} from "react-native";

import UpdateRecipeForm from "../components/UpdateRecipeForm";
import axios from "axios";


//---------------------------------------------------------
const UpdateRecipeScreen = ({ navigation, route }) => {

    let paramsRecipe= route.params.recipe; 
    console.log("Params in UpdateRecipeScreen");
    console.log(paramsRecipe);

    //---------------------------------------------------------
    const handleUpdateFormSubmit = (form) => 
    {

        console.log("In handleUpdateFormSubmit");
        console.log(form);
        console.log(form._id);

        //---------------------------------------------------------
        const updateRecipe = async (form) => {

            let tagsArray = form.tags.split(" ");
            let ingredientsArray = form.ingredients.split("**");

            let updatedRecipe = {
                    type: form.type,
                    name: form.name,
                    description: form.description,
                    ingredients: ingredientsArray,
                    tags: tagsArray,
                    cookTime: form.cookTime,
                    calories: form.calories,
                    directions: form.directions,
                    rates: form.rates,
            } 

                let url = 'https://recipe-app-server-production.up.railway.app/recipes/' + form._id;

                const resp = await axios.patch(url, updatedRecipe)
                .then( navigation.push("Recipes", {type: form.type}))
                .catch((error) => console.log('Error: ', error));  
        };

        updateRecipe(form);

    }

    //=====================================================
    return (
        <KeyboardAvoidingView 
        behavior={"height"}
        keyboardVerticalOffset={0}
        enabled={false} 
        style={styles.container} > 

        <View style={styles.titleContainer}>
                <Text style={styles.text}>Uppdate the recipe</Text>
            </View>

            <View   style={[styles.miniContainer]}>
                <UpdateRecipeForm onSubmit={handleUpdateFormSubmit} recipe={paramsRecipe}/>
            </View>

            <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Home")}>
                            <Text style={styles.btnText}><Entypo name="arrow-bold-left" size={24} color="#daa520" />Home</Text>
                        </Pressable>
            
            </View>


        </KeyboardAvoidingView>
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

    titleContainer: {
        flex: 0.1,
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: "rgba(89, 31, 5, 0.83)",
    },

    btnContainer: {
        flex: 0.1,
        width: "100%",
        backgroundColor: "rgba(108, 56, 32, 0.83)",
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    miniContainer: {
        flex: 0.8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    text: {
        fontSize: 24,
        color: "#daa520",
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 15,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    btnText: {
        color: "#daa520",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginLeft: 130,
        width: "80%"
    },

    btnPressMe: {
        paddingVertical: 10,
        paddingLeft: 120,
        paddingRight: 20,
    },

})

export default UpdateRecipeScreen