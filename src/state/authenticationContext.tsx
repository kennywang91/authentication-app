import React, {
    createContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
    name: string;
    email: string;
    password: string; // stored only for demo purposes
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthenticationContext = createContext<AuthContextType>(
    {} as AuthContextType,
);

interface AuthenticationProviderProps {
    children: ReactNode;
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        };

        loadUser();
    }, []);

    const login = async (email: string, password: string) => {
        if (!email.includes('@') || password.length < 6) {
            throw new Error('Invalid email or password format');
        }


        const storedUser = await AsyncStorage.getItem('user');
        if (!storedUser) {
            throw new Error('User not found');
        }

        const parsedUser: User = JSON.parse(storedUser);

        if (parsedUser.email !== email || parsedUser.password !== password) {
            throw new Error('Incorrect credentials');
        }

        setUser(parsedUser);
    };

    const signup = async (name: string, email: string, password: string) => {
        if (!name || !email || !password) {
            throw new Error('All fields are required');
        }

        if (!email.includes('@')) {
            throw new Error('Invalid email format');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }

        const newUser: User = { name, email, password };
        await AsyncStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
    };

    const logout = async () => {
        // await AsyncStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthenticationContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};