import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationManager';
import { AuthenticationContext } from '../state/authenticationContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupPage: React.FC<Props> = ({ navigation }) => {
    const { signup } = useContext(AuthenticationContext);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSignup = async () => {
        try {
            setError('');
            await signup(name, email, password);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>

            <TextInput placeholder="Name" style={styles.input} onChangeText={setName} />
            <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
            <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupPage;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 28, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
    button: { backgroundColor: '#16a34a', padding: 15, borderRadius: 8 },
    buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
    error: { color: 'red', marginBottom: 10 },
    link: { marginTop: 15, color: '#16a34a', textAlign: 'center' },
});