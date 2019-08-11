import React,{useState,useEffect} from 'react';
import { KeyboardAvoidingView,Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import logo from '../assets/logo.png';
import api from '../services/Api';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({navigation}) {
    const [user, setUser] = useState('');

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user=>{
            if(user){
                navigation.navigate('Main',{user})
            }
        });
    },[]);
    async function handleLogin() {
        const response = await api.post('/devs',{username: user});
        const {_id: id} = response.data;
        await AsyncStorage.setItem('user', id);
        navigation.navigate('Main',{user: id});
    }
    return (
        <KeyboardAvoidingView 
        behavior= 'padding'
        enabled={Platform
        .OS === 'ios'}
        style={styles.container}>
            <Image source={logo} />
            <TextInput
                autoCapitalize= "none"
                autoCorrect = {false}
                style={styles.input}
                placeholder="Digite seu usuário no GitHub"
                placeholderTextColor="#999"
                value={user}
                onChangeText={setUser}
                />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        marginTop: 20,
        borderRadius: 4,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        borderRadius: 4,
        backgroundColor: '#df4723',
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color:'#fff',
        fontWeight: "bold",
        fontSize: 16
        }
});