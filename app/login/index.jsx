


import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth, useUser } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }

  WebBrowser.maybeCompleteAuthSession()




export default function Index(){
    useWarmUpBrowser()
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const onPress = React.useCallback(async () => {
        // console.log("hello")
        try {
          const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({ 
            redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
          })
          console.log("hello 2",{createdSessionId})
        //   signIn()
          if (createdSessionId) {
            console.log({sessionId})
            setActive({ session: createdSessionId })
          } else {
            // Use signIn or signUp for next steps such as MFA
            // signUp()
          }
        } catch (err) {
          console.error('OAuth error', err)
        }
      }, [])

      const {user} = useUser();
      console.log('OAuth -> ',{user})

    return(<>
    <View style={{
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
        <Image source={require('@/assets/images/login.png')}
        style={{
            width: '100%',
            height: 500,
        }}
        />
        <View style={{
            padding:20,
            display:'flex',
            alignItems:'center'
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize:30,
                textAlign:'center'
            }}>
                Ready to make new friend 
            </Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize:18,
                textAlign:'center',
                color:Colors.GRAY
            }}>Lets adopt the pet which you like and make there life happy</Text>

            <Pressable
            onPress={onPress}
            style={{
                backgroundColor:Colors.PRIMARY,
                padding:14,
                marginTop:100,
                borderRadius:14,
                width:'100%',
            }}
            >
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize:20,
                    textAlign:'center'
                }}>
                 
                    Get Started
                </Text>
            </Pressable>
        </View>
    </View>
    </>)
}