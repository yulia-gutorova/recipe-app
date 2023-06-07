import {Text, View, StyleSheet, TextInput, Pressable, ScrollView} from "react-native"
import { useState } from "react"


const UpdateRecipeForm = ({onSubmit, recipe}) => {
    //const [text, setText] = useState('Useless Text');

    let params = recipe;
    console.log("Params in UpdateRecipeForm");
    console.log(params.recipe);

    const [form, setForm] = useState({
        _id: params.recipe._id,
        type: params.recipe.type,
        name: params.recipe.name,
        description: params.recipe.description,
        ingredients: params.recipe.ingredients,
        tags: params.recipe.tags.toString(),
        cookTime: params.recipe.cookTime.toString(),
        calories: params.recipe.calories,
        directions: params.recipe.directions,
        rates: params.recipe.rates.toString(),
    });

    console.log("Form in UpdateRecipeForm");
    console.log(form);

    const onChangeText = (name) => (text) => {
        setForm({
            ...form,
            [name] : text
        })
    }


    return (
        <View>

    <ScrollView style={styles.container}>
            <TextInput
                label="Type"
                text={form.type}
                placeholder="Type"
                style={styles.input}
                onChangeText={onChangeText("type")}
                value={form.type}
            />
            <TextInput
                label="Name"
                text={form.name}
                placeholder="Name"
                style={styles.input}
                onChangeText={onChangeText("name")}
                value={form.name}
            /> 
            <TextInput
                label="Desription"
                text={form.description}
                placeholder="Desription"
                multiline={true}
                style={styles.input}
                onChangeText={onChangeText("description")}
                value={form.description}
            />
            <TextInput
                label="Ingredients"
                text={form.ingredients}
                placeholder="Ingredients"
                multiline={true}
                style={styles.input}
                onChangeText={onChangeText("ingredients")}
                value={form.ingredients}
            /> 
            <TextInput
                label="Tags"
                text={form.tags}
                placeholder="Tags"
                style={styles.input}
                onChangeText={onChangeText("tags")}
                value={form.tags}
            />
            <TextInput
                label="Cook Time"
                text={form.cookTime}
                placeholder="Cook Time"
                keyboardType="phone-pad"
                style={styles.input}
                onChangeText={onChangeText("cookTime")}
                value={form.cookTime}
            /> 
            <TextInput
                label="Calories"
                placeholder="Calories"
                style={styles.input}
                onChangeText={onChangeText("calories")}
                value={form.calories}
            />
            <TextInput
                label="Directions"
                text={form.directions}
                placeholder="Directions"
                multiline={true}
                style={styles.input}
                onChangeText={onChangeText("directions")}
                value={form.directions}
            /> 
            <TextInput
                label="Rates"
                text={form.rates}
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

const styles = StyleSheet.create ({
container: {
    flex: 0.8,
    padding: 20,
    backgroundColor: "gray",
    width: 420
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default UpdateRecipeForm;