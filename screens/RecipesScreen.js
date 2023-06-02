import { useEffect, useState } from "react"
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

        let type = route.params.type;

        const [recipes, setRecipes] = useState([]);
        const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => 
    {
        const getAllRecipes = async () => 
        {
            console.log("In get all recipes function");
            const resp = await axios.get('https://recipe-app-server-production.up.railway.app/recipes')
            .then(resp => {
                            //console.log("Responce");
                            //console.log(resp.data);
                            setRecipes(resp.data); 
                            let typeRecipes= resp.data.filter(item => item.type === type);
                            setFilteredRecipes(typeRecipes); 
                            })

            .catch((error) => console.log('Error: ', error));
        };  
        getAllRecipes();
    }, []); 

    //const completedBookings = response.data.filter((booking: Booking) => booking.status === false);
    
    console.log("Recipes:");
    console.log(recipes);
    console.log("Filtered recipes:");
    console.log(filteredRecipes);
    return (  
        <View style={styles.container}>
                
{/*                 <LinearGradient
                        colors={['rgba(217, 215, 215, 0.34)', 'rgba(163, 158, 158, 0.34)', 'black']}
                        style={styles.container}> */}

            <View style={styles.titleContainer}>
                <Text style={styles.text}>{type}</Text>
            </View>
            
            <View style={styles.imageContainer}>
                <Image               
                        source={require('../assets/vegetables-image.png')}
                        style={styles.image}>

                </Image>
            </View>

            <View style={styles.flatlistContainer}>
                <FlatList
                        style={styles.flatlist}
                        keyExtractor={item => item.id}
                        data={filteredRecipes}
                        showsVerticalScrollIndicator
                        renderItem={({ item }) => {

                            return(
                                <Pressable  onPress={
                                                () => navigation.navigate("RecipeDetail", {title: item.name, recipe:{item}})
                                            }>
                                    <OneRecipe title={item.name} recipe={{item}}/>       
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
        marginTop: 20,
        backgroundColor: "gray",
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