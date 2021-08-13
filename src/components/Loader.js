import React from 'react'
import {View, Text, ActivityIndicator} from "react-native"
export default Loader = ()  => {
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:"center"
        }} >
            <ActivityIndicator size="large" color="#dd675d" />
        </View>
    )
}

 
