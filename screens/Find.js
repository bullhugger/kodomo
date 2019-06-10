import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    FlatList,
} from "react-native";
import Category from './category/Category'
import { ListView } from 'native-base'

class Find extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    /*constructor(props) {
 
        super(props);
     
        this.state = {
     
          isLoading: true,
          text: '',
        
        }
     
        this.arrayholder = [] ;
      }
     
      componentDidMount() {
     
        return fetch('http://192.168.1.43/kodomo/school_list.php')
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJson),
            }, function() {

              this.arrayholder = responseJson;
     
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
       SearchFilterFunction(text){
         
         const newData = this.arrayholder.filter(function(item){
             const itemData = item.name.toUpperCase()
             const textData = text.toUpperCase()
             return itemData.indexOf(textData) > -1
         })
         this.setState({
             dataSource: this.state.dataSource.cloneWithRows(newData),
             text: text
         })
     }
     
      ListViewItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }*/

    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Image source={require('../image/search.png')} style={{ height: 20, width: 20, }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor="grey"
                                onChangeText={text => this.searchFilterFunction(text)}
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white', padding: 10, }}
                            />
                        </View>
                    </View>

                        <View style={{ flex: 1, backgroundColor: 'white',}}>
                            <Text style={{ padding: 10, marginHorizontal: 10, textAlign: 'left', fontSize: 24, fontWeight: '700', }}>Looking for a school?</Text>
                            <View style={{ height: 130, marginTop: 20, }}>
                                <ScrollView style={{padding: 0, color: 'white'}}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../image/city.jpg')}
                                        imageName= {'City'}/>
                                    <Category imageUri={require('../image/school.jpg')}
                                        imageName= {'School'}/>
                                    <Category imageUri={require('../image/syllabus.jpg')}
                                        imageName= {'Syllabus'}/>
                                </ScrollView>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white',}}>
                            <Text style={{ padding: 10, marginHorizontal: 10, textAlign: 'left', fontSize: 24, fontWeight: '700', }}>Upcoming school event</Text>
                            <View style={{ height: 130, marginTop: 20, }}>
                                <ScrollView style={{padding: 0, color: 'white'}}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>

                                    <Category 
                                        landingPage={() => navigate('Profile')}
                                        imageUri={require('../image/open_day.jpg')}
                                        imageName={'Open Day'}
                                        />
                                    <Category imageUri={require('../image/international_day.jpg')}
                                        imageName={'International Day'}
                                        />
                                    <Category imageUri={require('../image/student_visa.jpg')}
                                        imageName={'Student Visa?'}
                                        />
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Find;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});