import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthenticationContext } from '../state/authenticationContext';

const HomePage: React.FC = () => {
    const { user, logout } = useContext(AuthenticationContext);

    if (!user) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.text}>Name: {user.name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>

            <TouchableOpacity style={styles.button} onPress={() => logout()}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, marginBottom: 20 },
    text: { fontSize: 16, marginBottom: 5 },
    button: { marginTop: 20, backgroundColor: '#dc2626', padding: 15, borderRadius: 8 },
    buttonText: { color: '#fff', fontWeight: 'bold' },
});