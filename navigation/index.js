import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../home/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import AddNewRecipeScreen from "../screens/AddNewRecipeScreen";

export default function Navigation() {

    const Stack = createNativeStackNavigator();

    return(    
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Home" >

                    <Stack.Screen 
                        name="Home"
                        component={HomeScreen}
                        options={{headerShown: false}}
                        />  
                        
                 <Stack.Screen 
                        name="Recipes"
                        component={RecipesScreen}
                        options={{headerShown: false}}
                        /> 

                <Stack.Screen 
                        name="RecipeDetail"
                        component={RecipeDetailScreen}
                        options={{headerShown: false}}
                        /> 

                <Stack.Screen 
                        name="AddNew"
                        component={AddNewRecipeScreen}
                        options={{headerShown: false}}
                        /> 
                </Stack.Navigator>
            </NavigationContainer>
    )
}