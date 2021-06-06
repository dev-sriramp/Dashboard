import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const MyNavigator = () => {
    const [splashScreen,setShowSplash] = React.useState(true);
    React.useEffect(() => {
        setTimeout(async () =>{
            setShowSplash(false);
        },3000);
    },[]);
if(splashScreen){
    return <SplashScreen />;
}
return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyNavigator;