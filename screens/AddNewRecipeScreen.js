import { LinearGradient } from "expo-linear-gradient";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    ScrollView,
} from "react-native";

import AddNewRecipeForm from "../components/AddNewRecipeForm";

import axios from "axios";


const Separator = () => <View style={styles.separator} />;

const AddNewRecipeScreen = ({ navigation }) => {


    const handleFormSubmit = (form) => 
    {
        const createRecipe = async (form) => {

            let tagsArray = form.tags.split(" ");

            let newRecipe = {
            type: form.type,
            name: form.name,
            description: form.description,
            ingredients: form.ingredients,
            tags: tagsArray,
            cookTime: form.cookTime,
            calories: form.calories,
            directions: form.directions,
            rates: form.rates,
            } 

            console.log(newRecipe)

            const resp = await axios.post('https://recipe-app-server-production.up.railway.app/recipes', newRecipe)
            .then
            ( 

            )
            .catch((error) => console.log('Error: ', error));
        };

        createRecipe(form);

        switch (form.type) 
        {
            case 'Soups':
                navigation.push("Recipes", {type: "Soups"});
                break;

            default:
                navigation.navigate("Home");
        }

    }

    //=====================================================
    return (
        <View style={styles.container} >

            <View   style={[styles.miniContainer]}>
                <AddNewRecipeForm onSubmit={handleFormSubmit}/>
            </View>

            <View style={styles.btnContainer}>

                        <Separator/>
                        <Pressable
                            style={styles.btnPressMe}
                            onPress={() => navigation.push("Home")}>
                            <Text style={styles.btnText}>AddNewItemHome</Text>
                        </Pressable>

                       
            </View>


        </View>
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
        flex:0.2,
        width: "100%",
        //alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: "rgba(71, 53, 29, 0.83)",
        //backgroundColor: "rgba(74, 38, 0, 0.83)",
        backgroundColor: "rgba(71, 32, 14, 0.83)",
        borderTopLeftRadius: 300,
        borderTopRightRadius: 100,
        opacity: 0.8   
    },

    miniContainer: {
        flex: 0.9,
        width: "50%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 50
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
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginLeft: 130,
        //backgroundColor: "white",
        width: "80%"
    },

    separator: {
        marginVertical: 20,
    },

    btnPressMe: {
        //textAlign: "center",
        paddingVertical: 20,
        paddingHorizontal: 100,
        //backgroundColor: "gray"
    },

})

export default AddNewRecipeScreen