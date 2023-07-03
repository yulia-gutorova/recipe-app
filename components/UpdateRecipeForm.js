import { useState } from "react"
import { RadioButton } from 'react-native-paper';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView,
    KeyboardAvoidingView
} from "react-native"
import CustomRadioButton from "./CustomRadioButton";

const UpdateRecipeForm = ({ onSubmit, recipe }) => {

    let params = recipe;

    const [checkedCalories, setCheckedCalories] = useState(params.recipe.calories.toString());
    const [checkedRate, setCheckedRate] = useState(params.recipe.rates.toString());
    const types = ["Soups", "Salads", "Main dishes", "Desserts", 'Vegetables', "Holidays"];

    const [form, setForm] = useState({
        _id: params.recipe._id,
        type: params.recipe.type,
        name: params.recipe.name,
        description: params.recipe.description,
        ingredients: params.recipe.ingredients.join(" * "),
        tags: params.recipe.tags.toString().replace(/,/g, " "),
        cookTime: params.recipe.cookTime.toString(),
        calories: params.recipe.calories,
        directions: params.recipe.directions,
        rates: params.recipe.rates.toString(),
    });

    //---------------------------------------------------------
    const onChangeText = (name) => (text) => {
        setForm({ ...form, [name]: text})
    }

    //---------------------------------------------------------
    const onChangeRadioButton = (name, text) => {
        setCheckedCalories(text);
        setForm({...form, [name]: text})
    }

    //---------------------------------------------------------
    const onChangeCustomRadioButton = (name, text) => {
        setForm({...form, [name]: text})
    }

    //---------------------------------------------------------
    const onChangeRatesRadioButton = (name, text) => {
        setCheckedRate(text);
        setForm({...form, [name]: text})
    }

    //=====================================================
    return (
        <View>

            <ScrollView style={styles.container}>

                <KeyboardAvoidingView behavior={"padding"}>

                    <View style={styles.miniContainer}>
                        <Text style={[styles.paragraph, { fontWeight: "bold" }]}>Choose type: </Text>
                        <CustomRadioButton data={types} option={params.recipe.type} onSelect={(value) => onChangeCustomRadioButton("type", value)} />
                    </View>

                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Name: </Text>
                    <TextInput
                        label="Name"
                        selectionColor={'black'}
                        text={form.name}
                        style={styles.input}
                        onChangeText={onChangeText("name")}
                        value={form.name}
                    />
                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Description: </Text>
                    <TextInput
                        text={form.description}
                        selectionColor={'black'}
                        multiline={true}
                        style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
                        onChangeText={onChangeText("description")}
                        value={form.description}
                    />

                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Ingredients (split with **): </Text>
                    <TextInput
                        text={form.ingredients}
                        selectionColor={'black'}
                        multiline={true}
                        style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
                        onChangeText={onChangeText("ingredients")}
                        value={form.ingredients}
                    />

                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Tags (split with space): </Text>
                    <TextInput
                        text={form.tags}
                        selectionColor={'black'}
                        style={styles.input}
                        onChangeText={onChangeText("tags")}
                        value={form.tags}
                    />

                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Cook Time: </Text>
                    <TextInput
                        keyboardType="phone-pad"
                        selectionColor={'black'}
                        style={styles.input}
                        onChangeText={onChangeText("cookTime")}
                        value={form.cookTime}
                    />

                    <View style={styles.miniContainer}>
                        <Text style={{ fontWeight: "bold" }}>Calories: </Text>

                        <View style={styles.radioButtonsContainer}>

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

                    <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Directions: </Text>
                    <TextInput
                        text={form.directions}
                        selectionColor={'black'}
                        multiline={true}
                        style={[styles.input, { minHeight: 100, textAlignVertical: "top" }]}
                        onChangeText={onChangeText("directions")}
                        value={form.directions}
                    />

                    <View style={styles.miniContainer}>
                        <Text style={{ fontWeight: "bold" }}>Rates: </Text>

                        <View style={styles.radioButtonsContainer}>

                            <View>
                                <Text style={{ paddingLeft: 10 }}>1</Text>
                                <RadioButton
                                    color="red"
                                    value="1"
                                    status={checkedRate === '1' ? 'checked' : 'unchecked'}
                                    onPress={(value) => onChangeRatesRadioButton("rates", "1")}
                                />
                            </View>

                            <View>
                                <Text style={{ paddingLeft: 10 }}>2</Text>
                                <RadioButton
                                    color="red"
                                    value="2"
                                    status={checkedRate === '2' ? 'checked' : 'unchecked'}
                                    onPress={(value) => onChangeRatesRadioButton("rates", "2")}
                                />
                            </View>

                            <View>
                                <Text style={{ paddingLeft: 10 }}>3</Text>
                                <RadioButton
                                    color="red"
                                    value="3"
                                    status={checkedRate === '3' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRatesRadioButton("rates", "3")}
                                />
                            </View>

                            <View>
                                <Text style={{ paddingLeft: 10 }}>4</Text>
                                <RadioButton
                                    color="red"
                                    value="4"
                                    status={checkedRate === '4' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRatesRadioButton("rates", "4")}
                                />
                            </View>

                            <View>
                                <Text style={{ paddingLeft: 10 }}>5</Text>
                                <RadioButton
                                    color="red"
                                    value="5"
                                    status={checkedRate === '5' ? 'checked' : 'unchecked'}
                                    onPress={() => onChangeRatesRadioButton("rates", "5")}
                                />
                            </View>

                        </View>
                    </View>

                    <Pressable
                        style={styles.btnPressMe}
                        onPress={() => onSubmit(form)}>
                        <Text style={styles.btnText}>Submit</Text>
                    </Pressable>

                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}

//-------------- Styles-----------------------------
const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        padding: 20,
        backgroundColor: "rgba(176, 165, 153, 1)",
        width: 420,
    },

    miniContainer: {
        flex: 0.8,
        padding: 20,
        width: 400,
        alignSelf: 'center',
    },

    radioButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    input: {
        height: 40,
        margin: 12,
        borderColor: "rgba(108, 56, 32, 0.83)",
        borderWidth: 1,
        //padding: 10,
    },

    btnPressMe: {
        alignSelf: 'center',
        width: 200,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: "center",
        marginBottom: 250,
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

export default UpdateRecipeForm;