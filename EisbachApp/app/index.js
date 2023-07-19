import {View, ScrollView, SafeAreaView, Text, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import {Stack, useRouter} from 'expo-router';
import React, {useState} from 'react'; //Do I need this?

const Cat = props => {
    return (
        <View>
            <Text>Hello, I am {props.name}</Text>
            <Text>I am {props.age} years old</Text>
        </View>
    );
};

const getFullName = (firstName, secondName, thirdName) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
}

const Home = () => {

    return (
        <ScrollView style={{backgroundColor: '#a7c5f9'}}>
            <View style ={{flex: 1, backgroundColor: 'white', alignItems:'center'}}>
                <Text style={{fontSize:36}}> Heading </Text>
                <Cat name= "Cat One" age="5" />
                <Text style={{alignSelf: 'flex-start', paddingLeft: 20}}>I am {getFullName("Chris", "Bloch", "Blott")}</Text>
                <TouchableOpacity style={styles.basicButton} onPress={() => console.log('Button Pressed')}>
                    <Text style= {{color: 'white'}}>Click Me</Text>
                </TouchableOpacity>
            </View>

            
        

        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    basicButton: {
        padding: 10,
        backgroundColor: 'purple',
        width: 150,
        //justifyContent: 'center',
        alignItems: 'center',
    }
})


export default Home;