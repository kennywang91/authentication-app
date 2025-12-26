import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticationContext } from '../state/authenticationContext';
import LoginScreen from '../pages/loginPage';
import SignupScreen from '../pages/signUpPage';
import HomeScreen from '../pages/homePage';

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainNavigator: React.FC = () => {
    const { user, loading } = useContext(AuthenticationContext);

    if (loading) return null;

    return (
        <Stack.Navigator>
            {user ? (
            <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
            <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            </>
            )}
        </Stack.Navigator>
    );
};

export default MainNavigator;