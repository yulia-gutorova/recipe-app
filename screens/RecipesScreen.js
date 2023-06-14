import { useEffect, useState, useCallback} from "react"
import { useFocusEffect } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import  {LinearGradient}  from "expo-linear-gradient";
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


const Separator = () => <View style={styles.separator} />;

const RecipesScreen = ({ navigation, route }) => {

    //-----------------------------------------------------
    //useFocusEffect to get all recipes when navigating to RecipeScreen
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
        console.log("Image");
        console.log(route.params.image); 

        const [recipes, setRecipes] = useState([]);
        const [filteredRecipes, setFilteredRecipes] = useState([]);
        //const [typeRecipes, setTypeRecipes] = useState([]);
        const isFocused = useIsFocused();

   /*   useEffect(() => 
    { 
        const getAllRecipes = async (type) => 
        {
            console.log("inside useEffect");
            console.log("In get all recipes function");
            const resp = await axios.get('https://recipe-app-server-production.up.railway.app/recipes')
            .then(resp => {
                            //console.log("Responce");
                            //console.log(resp.data);
                            //setRecipes(resp.data); 
                            let typeRecipes= resp.data.filter(item => item.type === type);
                            setFilteredRecipes(typeRecipes); 
                            })

            .catch((error) => console.log('Error: ', error));
        };  
        getAllRecipes(type);

    }, []);   */
 

    console.log("Recipes outside:");
    console.log(recipes);
    let typeRecipes= recipes.filter(item => item.type === type);
    console.log("typeRecipe outside");
    console.log(typeRecipes); 

    //=====================================================
    return (  
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{type}</Text>
            </View>
            
            <View style={styles.imageContainer}>
                {type === "Vegetables" ? <Image source={require('../assets/vegetables-image.png')}style={styles.image}></Image>: null}
                {type === "Soups" ? <Image source={require('../assets/soup-image.png')}style={styles.image}></Image>: null}
                {type === "Salads" ? <Image source={require('../assets/salad-image.png')}style={styles.image}></Image>: null}
                {type === "Main Dishes" ? <Image source={require('../assets/main-dishes-image.png')}style={styles.image}></Image>: null}
                {type === "Desserts" ? <Image source={require('../assets/desserts-image.png')}style={styles.image}></Image>: null}
                {type === "Holidays" ? <Image source={require('../assets/holidays-image.png')}style={styles.image}></Image>: null}
            </View>

            <View style={styles.flatlistContainer}>

                {typeRecipes.length === 0 ? <Text style={styles.text}>You still don't have any  recipes here.</Text> : null}
                <FlatList
                        style={styles.flatlist}
                        keyExtractor={item => item.id}
                        data={typeRecipes}
                        showsVerticalScrollIndicator
                        renderItem={({ item }) => {

                            return(
                                <Pressable  onPress={
                                                () => navigation.navigate("RecipeDetail", {title: item.name, recipe:{item}})
                                            }>
                                    <OneRecipe key={item.id} title={item.name} recipe={{item}}/>       
                                </Pressable>        
                            )
                     
                        }
                        }
                    />
            </View>
            
            <View style={styles.btnContainer}>

                <Pressable
                    style={styles.btnPressMe}
                    onPress={() => navigation.push("Home")}>
                    <Text style={styles.btnText}><Entypo name="arrow-bold-left" size={24} color="#daa520" /> Home</Text>
                </Pressable>
            </View>

{/* </LinearGradient> */}
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
        //backgroundColor: "black",
        width: "100%",
    },

    btnContainer: {
        flex: 0.2,
        width: "100%",
        //alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: "rgba(71, 53, 29, 0.83)",
        //backgroundColor: "rgba(74, 38, 0, 0.83)",
        backgroundColor: "rgba(108, 56, 32, 0.83)",
        //opacity: 0.8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        //backgroundColor: "gray",
    },

    titleContainer: {
        flex: 0.2,
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 0,
        backgroundColor: "rgba(89, 31, 5, 0.83)",
        //opacity: 0.8
    },

    flatlistContainer:{
        flex: 0.8,
        marginTop: 30,
        backgroundColor: "rgba(0, 0, 0, 0.62)",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        flex: 0.4,
        width: "100%", 
    },

    flatlist: {
        maxHeight: 500,
    },

    text: {
        fontSize: 24,
        color: "#daa520",
        fontStyle: "italic",
        fontWeight: "bold",
        //marginLeft: 20,
        textAlign: "right",
        marginTop: 25,
        marginLeft: 10,
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
        marginLeft: 0,
        //backgroundColor: "white",
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

    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    }

})

export default RecipesScreen