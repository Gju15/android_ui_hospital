

import React from 'react';
import { 
    View,
    Text,
 } from 'react-native';
const Home = (props) =>{
    console.warn(props)
    return (
        <View>
        <Text style= {{fontSize:80}}>
        {props.data}
        </Text>

        </View>
    );
};


export default Home;