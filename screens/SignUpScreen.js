import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

class SignUpScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state={
            userName:'',
            userEmail:'',
            userPassword:'',
        }
    }

    SubmitRegistration = () => {
        const {userName} = this.state;
        const {userEmail} = this.state;
        const {userPassword} = this.state;
    
        fetch('http://192.168.1.43/kodomo/register_user.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                username: userName,
                email: userEmail,
                password: userPassword
            })
        })
        .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                            <Image 
                                style={styles.logo}
                                source = {require('C://Users/zheng/Documents/help/Kodomo/image/drawing.png')}
                            />
                            <Text style={styles.text}>Please add your information below.</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="username" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.usernameInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({userName})}/>
                    <TextInput 
                        placeholder="email" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.emailInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userEmail => this.setState({userEmail})}/>
                    <TextInput 
                        placeholder="password"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                        onChangeText={userPassword => this.setState({userPassword})}/>
                    <TouchableOpacity 
                    onPress={this.SubmitRegistration} 
                    style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>DONE</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

export default SignUpScreen;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    buttonContainer:{
        padding: 10,
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        width: '100%',
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
    },
    logoContainer: {
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 102,
        height: 110,
    },
    text: {
        color: '#FFF',
        marginTop: 12,
        opacity: 0.9,
        width: 180,
        textAlign: 'center',
    },
})