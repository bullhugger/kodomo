import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, }}>
                <View style={{ flex: 1 }}>
                    <TouchableHighlight style={{ width: 130, height: 80}}onPress = {this.props.landingPage}>
                            <Image style={{ flex: 1, width: null, height: null, borderRadius: 10 }}
                                source={this.props.imageUri}/>
                    </TouchableHighlight>
                    <Text style={{textAlign: 'center', fontSize: 15}}>{this.props.imageName}</Text>
                </View>
            </View>
        );
    }
}
export default Category;