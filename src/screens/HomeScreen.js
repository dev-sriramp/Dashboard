import React, { Component } from 'react';
import Tabletop from 'tabletop';
import { StyleSheet, View, StatusBar, SafeAreaView,  ScrollView ,} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { APP_WHITE, } from '../util/constants';
import { ListItem ,Avatar, Switch } from 'react-native-elements';
class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            color:'white'
        }
    }
    async componentDidMount() {
      
        Tabletop.init({
           key: '1KHpxj6EMVqE2MTRO_8FzZUnL-d1E7e4mFrzFDWmJE4E',
          callback: googleData => {
            this.setState({
              data: googleData
            })
          },
          simpleSheet: true
        })
      }
      find = () => {
this.props.navigation.navigate('MapScreen')
      }
    render() {
        const { data } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle='dark-content'
                    hidden={false}
                    backgroundColor={APP_WHITE}
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <ScrollView style={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
        <Switch value={this.state.value} onStartShouldSetResponder={()=>this.find} />

        {
            data.map((l,i) => (
              <ListItem onPress={this.find} key={i} bottomDivider>
                  
                  <Avatar source={{uri: 'https://345202-1075542-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/bigstock-Coming-Soon-Neon-Sign-Vector-320597035.jpg'}} />
              <ListItem.Content style={styles.container}>
              <ListItem.Title>{l.sno}</ListItem.Title>
              <ListItem.Subtitle>{l.name}</ListItem.Subtitle>
              </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
      </ScrollView>
            </SafeAreaView>
        );
    }
};
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_WHITE,
        textDecorationStyle:'dotted',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    stretch: {
        width: 250,
        height: 250,
        resizeMode: 'stretch'
    },

});