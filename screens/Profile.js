import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { ListItem, List } from 'native-base';

class Profile extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.profileImage}></View>
                </View>
                <View style={{padding: 5, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 10, padding: 5, margin: 5}}
                        onPress = {() => navigate('EditProfile')}>
                            <Text>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 10, padding: 5,margin: 5}}
                        onPress = {() => navigate('AddChildren')}>
                            <Text>Add Children</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>Name</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}>First Name -</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}>Last Name -</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>Contact</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}>Phone -</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}>Email -</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>Location</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}>Country -</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}>City -</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{fontWeight: 'bold'}}>Children</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.profileText}></Text>
                    </ListItem>
                </View>
            </ScrollView>
        );
    }
}

export default Profile;

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
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'grey',
    },
    profileText: {
        color: 'white',
    }
});