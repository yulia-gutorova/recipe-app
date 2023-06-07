import { Text, View, StyleSheet, TextInput, Pressable, ScrollView } from "react-native"
import { RadioButton } from 'react-native-paper';
import { useState } from "react"

const AddNewRecipeForm = ({ onSubmit }) => {
    //const [text, setText] = useState('Useless Text');
    const [checked, setChecked] = useState('');

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

    const onChangeText = (name) => (text) => {
        setForm({
            ...form,
            [name]: text
        })
    }

    const onChangeRadioButton = (name, text) => {
        setChecked('low')
        console.log("Form in onChangeradioButton:");
        console.log(name);
        console.log(text);
        console.log(form);
        setForm({
            ...form,
            [name]: text
        }) 
    }
    console.log("Form in outside:");
    console.log(form);
    

    return (
        <View>

            <ScrollView style={styles.container}>
                <TextInput
                    label="Type"
                    placeholder="Type"
                    style={styles.input}
                    onChangeText={onChangeText("type")}
                    value={form.type}
                />
                <TextInput
                    label="Name"
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={onChangeText("name")}
                    value={form.name}
                />
                <TextInput
                    label="Desription"
                    placeholder="Desription"
                    multiline={true}
                    style={styles.input}
                    onChangeText={onChangeText("description")}
                    value={form.description}
                />
                <TextInput
                    label="Ingredients"
                    placeholder="Ingredients"
                    multiline={true}
                    style={styles.input}
                    onChangeText={onChangeText("ingredients")}
                    value={form.ingredients}
                />
                <TextInput
                    label="Tags"
                    placeholder="Tags"
                    style={styles.input}
                    onChangeText={onChangeText("tags")}
                    value={form.tags}
                />
                <TextInput
                    label="Cook Time"
                    placeholder="Cook Time"
                    keyboardType="phone-pad"
                    style={styles.input}
                    onChangeText={onChangeText("cookTime")}
                    value={form.cookTime}
                />
{/*                 <TextInput
                label="Calories"
                placeholder="Calories"
                style={styles.input}
                onChangeText={onChangeText("calories")}
                value={form.calories}
                />  */}

                <View style={styles.radioButtonsContainer}>

                    <View>
                        <Text>Low</Text>
                        <RadioButton
                            value="low"
                            status={checked === 'low' ? 'checked' : 'unchecked'}
                            onPress={(value) => onChangeRadioButton("Calories", "low")}
                        />
                    </View>

                    <View>
                        <Text>Medium</Text>
                        <RadioButton
                            value="medium"
                            status={checked === 'medium' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('medium')}
                            onChangeText
                        />
                    </View>

                    <View>
                        <Text>High</Text>
                        <RadioButton
                            label="High"
                            value="high"
                            status={checked === 'high' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('high')}
                        />
                    </View>

                </View>

                <TextInput
                    label="Directions"
                    placeholder="Directions"
                    multiline={true}
                    style={styles.input}
                    onChangeText={onChangeText("directions")}
                    value={form.directions}
                />
                <TextInput
                    label="Rates"
                    placeholder="Rates"
                    keyboardType="phone-pad"
                    style={styles.input}
                    onChangeText={onChangeText("rates")}
                    value={form.rates}
                />


            </ScrollView>

            <Pressable
                style={styles.btnPressMe}
                onPress={() => onSubmit(form)}>
                <Text style={styles.btnText}>Submit</Text>
            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        padding: 20,
        backgroundColor: "gray",
        width: 420
    },

    radioButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default AddNewRecipeForm;