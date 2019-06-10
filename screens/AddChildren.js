import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import {ListItem, List} from 'native-base';

class EditProfile extends Component {

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email: '',
            country: '',
            city: '',
        }
    }

    submitProfile = () => {
        const {firstName} = this.state;
        const {lastName} = this.state;
        const {phoneNumber} = this.state;
        const {email} = this.state;
        const {country} = this.state;
    
        fetch('http://192.168.1.43/kodomo/add_children.php', {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                children_first_name: firstName,
                child_last_name: lastName,
                date_of_birth: phoneNumber,
                child_gender: email,
                special_support: country,
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
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.inputContainer}>
                <ListItem itemDivider 
                style={{marginVertical: 5}}>
                        <Text style={{fontWeight: 'bold'}}>Name</Text>
                    </ListItem>
                <TextInput 
                        placeholder="First Name" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.firstNameInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({firstName})}/>
                <TextInput 
                        placeholder="Last Name" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.lastNameInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({lastName})}/>
                <TextInput 
                        placeholder="Phone Number" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.phoneNumberInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({phoneNumber})}/>
                <TextInput 
                        placeholder="Email" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({email})}/>
                <TextInput 
                        placeholder="Country" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.countryInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({country})}/>
                <TextInput 
                        placeholder="City" 
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.cityInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={userName => this.setState({city})}/>
                </View>
                <View style={{justifyContent: 'center', alignItems: "center", padding: 10,}}>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 30,}}
                    onPress = {this.submitProfile}>
                            <Text>Save</Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 30, marginTop: 10}}
                    onPress = {() => navigate('Profile')}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    top: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },
});