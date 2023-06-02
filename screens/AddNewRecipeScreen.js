import { LinearGradient } from "expo-linear-gradient";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    Vibration,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

const AddNewRecipeScreen = ({ navigation }) => {

    return (
        <View
                style={styles.container} >

            <View   style={[styles.miniContainer,  {
            transform: [{skewX: '30deg'}, {skewY: '30deg'}],
          }]}
>
                <Text style={styles.text}>Add New Item Screen</Text>

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
        flex:1,
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