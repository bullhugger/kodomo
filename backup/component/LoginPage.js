import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

class LoginPage extends Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                            <Image 
                                style={styles.logo}
                                source = {require('C:/Users/zheng/Documents/help/Kodomo/image/drawing.png')}
                            />
                            <Text style={styles.text}>Welcome! Please register or login to proceed.</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput 
                            placeholder="username or email" 
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            returnKeyType="next"
                            style={styles.input}
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput 
                            placeholder="password"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                            returnKeyType="go"
                            style={styles.input}
                            ref={(input) => this.passwordInput = input}
                        />

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('RegisterPage')} title="RegisterPage"
                        style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 150,
        height: 160,
    },
    text: {
        color: '#FFF',
        marginTop: 12,
        opacity: 0.9,
        width: 180,
        textAlign: 'center',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        width: '100%',
        marginBottom: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 10,
    }
});