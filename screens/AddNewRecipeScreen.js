import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    ScrollView,
    KeyboardAvoidingView, 
    
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import AddNewRecipeForm from "../components/AddNewRecipeForm";
import axios from "axios";

const Separator = () => <View style={styles.separator} />;

//---------------------------------------------------------
const AddNewRecipeScreen = ({ navigation }) => {


    const handleFormSubmit = (form) => 
    {
        const createRecipe = async (form) => {

            let tagsArray = form.tags.split(" ");
            let ingredientsArray = form.ingredients.split("/");

            let newRecipe = {
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

            console.log(newRecipe)

            const resp = await axios.post('https://recipe-app-server-production.up.railway.app/recipes', newRecipe)
            .then( navigation.push("Recipes", {type: form.type}))
            .catch((error) => console.log('Error: ', error));
        };
        
        createRecipe(form);

    }

    //=====================================================
    return (
/*          <KeyboardAvoidingView behavior={"height"}
        keyboardVerticalOffset={1000}
        enabled={false} 
        style={styles.container} >  */

        <KeyboardAvoidingView 
        behavior={"height"}
        keyboardVerticalOffset={0}
        enabled={false} 
        style={styles.container} >  


            <View style={styles.titleContainer}>
                <Text style={styles.text}>Add a new recipe</Text>
            </View>

            <View style={[styles.miniContainer]}>
                <AddNewRecipeForm onSubmit={handleFormSubmit}/>
            </View>

            <View style={styles.btnContainer}>
                <Separator/>
                <Pressable
                    style={styles.btnPressMe}
                    onPress={() => navigation.push("Home")}>
                    <Text style={styles.btnText}><Entypo name="arrow-bold-left" size={24} color="#daa520" /> Home</Text>
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

    btnContainer: {
        flex: 0.1,
        width: "100%",
        backgroundColor: "rgba(108, 56, 32, 0.83)",
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    miniContainer: {
        flex: 0.8,
        //width: "50%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        //backgroundColor: "green",
        //paddingBottom: 80
        
    },

    titleContainer: {
        flex: 0.1,
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: "rgba(89, 31, 5, 0.83)",
        //opacity: 0.8
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
        //marginLeft: 130,
        //backgroundColor: "white",
        width: "80%"
    },

    separator: {
        marginVertical: 20,
    },

    btnPressMe: {
        paddingVertical: 10,
        paddingLeft: 120,
        paddingRight: 20,
        //backgroundColor: "gray", 
    },

})

export default AddNewRecipeScreen