import React,{Component} from 'react';
import {StyleSheet,View,SafeAreaView, StatusBar} from 'react-native';
import { HP , WP , APP_WHITE} from '../util/constants';
import LottieView from 'lottie-react-native';

class SplashScreen extends Component{
    render(){
        return (

            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor={APP_WHITE}
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <View style={styles.header}>
                    <LottieView
                        source={require('../assets/Splash.json')}
                        loop={true}
                        autoPlay={true}
                        progress={1}
                        style={styles.splash}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default SplashScreen;

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor:APP_WHITE,
        },
        header: {
            paddingTop:HP('35%'),
            paddingBottom: HP('30%'),
        },
        splash: {
            height: HP('40%'),
            width: WP('40%'),
            
        },
    });