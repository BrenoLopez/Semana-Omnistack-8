import React from 'react';
import { KeyboardAvoidingView,Platform, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import logo from '../assets/logo.png';

export default function Login() {
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
                placeholderTextColor="#999" />
            <TouchableOpacity style={styles.button}>
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