


import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View
     style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#fff',
        borderWidth:0.5
     }}
    >

        <View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:18,
            }}>Welcome, </Text>
            <Text 
            style={{
                fontFamily:'outfit-medium',
                fontSize:25,
            }}
            >Babu</Text>
        </View>

        <Image source={require('@/assets/images/sex.png')} style={{
            width:40,height:40,borderRadius:99
        }}/>

    </View>
  )
}

export default Header