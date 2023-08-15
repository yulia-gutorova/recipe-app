import { RadioButton } from 'react-native-paper';
import { useState } from "react"
import { Text, 
    View, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    ScrollView, 
    KeyboardAvoidingView,
    Alert} from "react-native"

import CustomRadioButton from "./CustomRadioButton";

//---------------------------------------------------------
const AddNewRecipeForm = ({ onSubmit }) => {

    const [checkedCalories, setCheckedCalories] = useState('');

    const [checkedRate, setCheckedRate] = useState('');
    
    const types = ["Soups", "Salads", "Main dishes", "Desserts", 'Vegetables', "Holidays"];

    const [form, setForm] = useState({
        type: "",
        name: "",
        description: "",
        ingredients: "",
        tags: "",
        cookTime: "",
        calories: "",
        directions: "",
        rates: "",
    });

 //---------------------------------------------------------
    const submitHandler = (form) => {

        if (form.type.trim().length === 0 ||
            form.name.trim().length === 0 ||
            form.description.trim().length === 0 ||
            form.ingredients.trim().length === 0 ||
            form.tags.trim().length === 0 ||
            form.cookTime.trim().length === 0 ||
            form.calories.trim().length === 0 ||
            form.directions.trim().length === 0||
            form.rates.trim().length === 0) 
            {
            Alert.alert('Check that you have filled in all the input fields');
            }

        else { onSubmit(form) };
    }

    //---------------------------------------------------------
    const onChangeText = (name) => (text) => {
        setForm({
            ...form,
            [name]: text
        })
    }

    //---------------------------------------------------------
    const onChangeRadioButton = (name, text) => {
        setCheckedCalories(text);
        setForm({
            ...form,
            [name]: text
        })
    }
    //---------------------------------------------------------
    const onChangeCustomRadioButton = (name, text) => {
        setForm({
            ...form,
            [name]: text
        })
    }
    //---------------------------------------------------------
    const onChangeRatesRadioButton = (name, text) => {
        setCheckedRate(text);
        setForm({
            ...form,
            [name]: text
        })
    }

    //=====================================================
    return (
        <View style={styles.mainContainer}>

            <ScrollView  style={styles.container}>
{/*             <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={100}
                    behavior={"position"}> */}
                
                <KeyboardAvoidingView behavior={"padding"} enabled>

            {/* Type custom radio buttons */}
                    <View style={styles.miniContainer}>
                        <Text style={[styles.paragraph, {fontWeight:"bold"}]}>Choose type: </Text>
                        <CustomRadioButton data={types} onSelect={(value) => onChangeCustomRadioButton("type", value)} />
                    </View>

            {/* Name text field */}
                    <Text style={{fontWeight:"bold", marginLeft: 10}}>Name: </Text>
                    <TextInput
                        label="Name"
                        selectionColor={'black'}
                        style={styles.input}
                        onChangeText={onChangeText("name")}
                        value={form.name}
                    />

            {/* Description text field */}
                    <Text style={{fontWeight:"bold", marginLeft: 10}}>Description: </Text>
                    <TextInput
                        label="Desription"
                        selectionColor={'black'}
                        multiline={true}
                        style={[styles.input, {minHeight: 100, textAlignVertical: "top"}]}
                        onChangeText={onChangeText("description")}
                        value={form.description}
                    />

            {/* Ingredients text field */}
                    <Text style={{fontWeight:"bold", marginLeft: 10}}>Ingredients (split with **): </Text>
                    <TextInput
                        label="Ingredients"
                        selectionColor={'black'}
                        multiline={true}
                        style={[styles.input, {minHeight: 100, textAlignVertical: "top"}]}
                        onChangeText={onChangeText("ingredients")}
                        value={form.ingredients}
                    />

            {/* Tags text field */}
                    <Text style={{fontWeight:"bold", marginLeft: 10}}>Tags (split with space): </Text>
                    <TextInput
                        label="Tags"
                        selectionColor={'black'}
                        style={styles.input}
                        onChangeText={onChangeText("tags")}
                        value={form.tags}
                    />

            {/* Cook time text field */}
                    <Text style={{fontWeight:"bold", marginLeft: 10}}>Cook Time: </Text>
                    <TextInput
                        label="Cook Time"
                        selectionColor={'black'}
                        numeric
                        keyboardType="phone-pad"
                        style={styles.input}
                        onChangeText={onChangeText("cookTime")}
                        value={form.cookTime}
                    />

            {/* Calories radio buttons */}
                    <View style={[styles.miniContainer]}>
                        <Text style={{fontWeight:"bold"}}>Calories: </Text>

                        <View style={[styles.radioButtonsContainer, {backgroundColor: "gray"}]}>

                            <View>
                                <Text>Low</Text>
                                <RadioButton
                                    color="green"
                                    value="low"
                                    status={checkedCalories === 'low' ? 'checked' : 'unchecked'}
                                    onPress={(value) => onChangeRadioButton("calories", "low")}
                                />
                            </View>

                            <View>
                                <Text>Medium</Text>
                                <RadioButton
                                    color="green"
                                    value="medium"
                                    status={checkedCalories === 'medium' ? 'checked' : 'unchecked'}
                                    onPress={(value) => onChangeRadioButton("calories", "medium")}
                                />
                            </View>

                            <View>
                                <Text>High</Text>
                                <RadioButton
                                    color="green"
                                    value="high"
                                    status={checkedCalories === 'high' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRadioButton("calories", "high")}
                                />
                            </View>

                        </View>
                    </View>

            {/* Directionstext field */}
                    <Text style={{fontWeight:"bold", marginLeft: 10}}>Directions: </Text>
                    <TextInput
                        label="Directions"
                        selectionColor={'black'}
                        multiline={true}
                        style={[styles.input, {minHeight: 100, textAlignVertical: "top"}]}
                        onChangeText={onChangeText("directions")}
                        value={form.directions}
                    />
                    
            {/* Rates radio buttons*/}
                    <View style={styles.miniContainer}>
                        <Text style={{fontWeight:"bold"}}>Rates: </Text>

                        <View style={[styles.radioButtonsContainer, , {backgroundColor: "gray"}]}>

                            <View>
                                <Text style={{paddingLeft: 10}}>1</Text>
                                <RadioButton
                                    color="red"
                                    value="1"
                                    status={checkedRate === '1' ? 'checked' : 'unchecked'}
                                    onPress={(value) => onChangeRatesRadioButton("rates", "1")}
                                />
                            </View>

                            <View>
                                <Text style={{paddingLeft: 10}}>2</Text>
                                <RadioButton
                                    color="red"
                                    value="2"
                                    status={checkedRate === '2' ? 'checked' : 'unchecked'}
                                    onPress={(value) => onChangeRatesRadioButton("rates", "2")}
                                />
                            </View>

                            <View>
                                <Text style={{paddingLeft: 10}}>3</Text>
                                <RadioButton
                                    color="red"
                                    value="3"
                                    status={checkedRate === '3' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRatesRadioButton("rates", "3")}
                                />
                            </View>

                            <View>
                                <Text style={{paddingLeft: 10}}>4</Text>
                                <RadioButton
                                    color="red"
                                    value="4"
                                    status={checkedRate === '4' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRatesRadioButton("rates", "4")}
                                />
                            </View>

                            <View>
                                <Text style={{paddingLeft: 10}}>5</Text>
                                <RadioButton
                                    color="red"
                                    value="5"
                                    status={checkedRate === '5' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRatesRadioButton("rates", "5")}
                                />
                            </View>

                        </View>
                    </View>

{/*             {/* Submit button */}
                    <Pressable
                        style={styles.btnPressMe}
                        onPress={() => submitHandler(form)}>
                        <Text style={styles.btnText}>Submit</Text>
                    </Pressable> 
                </KeyboardAvoidingView>
            {/* Submit button */}

            </ScrollView>
        </View>

    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 0.8,
        //padding: 20,
        backgroundColor: "rgba(176, 165, 153, 1)",
        width: "100%",

    },

    miniContainer: {
        flex: 0.8,
        padding: 20,
        width: "100%",
        alignSelf: 'center',
        //borderColor: "gray",
        //borderWidth: 1
    },

    radioButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
 
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "rgba(108, 56, 32, 0.83)",
        padding: 10,
    }, 

    btnPressMe: {
        alignSelf: 'center',
        width: 200,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: "center",
        marginBottom: 150,
    },

    btnText: {
        color: "#daa520",
        fontSize: 24,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AddNewRecipeForm;