import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../home/HomeScreen";
import RecipesScreen from "../screens/RecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import AddNewRecipeScreen from "../screens/AddNewRecipeScreen";
import UpdateRecipeScreen from "../screens/UpdateRecipeScreen";

import { Entypo } from '@expo/vector-icons';

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

                <Stack.Screen 
                        name="Update"
                        component={UpdateRecipeScreen}
                        options={{headerShown: false}}
                        /> 
                        
                </Stack.Navigator>
            </NavigationContainer>
    )
   
}

/* const BottomTab = createBottomTabNavigator();

function BottomTabNavigator () {
    
    return(
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{unmountOnBlur: true,
                        tabBarIcon: ({color, size}) =><Entypo name="home" size={24} color={color} />}}
               />
        </BottomTab.Navigator>
    )

} */