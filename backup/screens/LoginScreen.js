import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

class LoginScreen extends Component {
    // Hides header bar
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
     
          userEmail: '',
          userPassword: ''
     
        }
    }

    login = () => {
     
        const { userEmail }  = this.state ;
        const { userPassword }  = this.state ;
        
       fetch('http://192.168.1.43/kodomo/login_user.php', {
         method: 'post',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           email: userEmail,
           password: userPassword
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
              if(responseJson === "Data Matched") //Verify email and password with MySQL user_account details.
               {
                   this.props.navigation.navigate('Home');// Sends user to Home.js screen if successful.
               }
               else{       
                 alert(responseJson);
               }
             }).catch((error) => {
               console.error(error);
             });       
    }

    render() {
        return(
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                            <Image 
                                style={styles.logo}
                                source = {require('../image/drawing.png')}
                            />
                            <Text style={styles.text}>Welcome! Please sign up or login to proceed.</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <TextInput 
                            placeholder="email" 
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            returnKeyType="go"
                            style={styles.input}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            autoCorrect={false}
                            onChangeText={userEmail => this.setState({userEmail})}
                        />

                        <TextInput 
                            placeholder="password"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            secureTextEntry
                            returnKeyType="go"
                            style={styles.input}
                            onChangeText={userPassword => this.setState({userPassword})}
                        />

                        <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={this.login}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SignUp')} title="SignUp"
                        style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

export default LoginScreen

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
        width: 85,
        height: 90,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});