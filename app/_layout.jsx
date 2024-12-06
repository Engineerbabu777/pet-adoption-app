import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'

import * as SecureStore from 'expo-secure-store'


// const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// if(){
//   return 
// }
// Cache the Clerk JWT
const tokenCache = {
	async getToken(key) {
		try {
			return SecureStore.getItemAsync(key);
		} catch (err) {
			return null;
		}
	},
	async saveToken(key, value) {
		try {
			return SecureStore.setItemAsync(key, value);
		} catch (err) {
			return;
		}
	}
};



export default function RootLayout () {
  
  useFonts({
    outfit: require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf')
  });

  if(process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY == null || process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY == '' || process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY == undefined){
    return 'error'
  }

  return(  <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
  >
    <ClerkLoaded>

    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='(tabs)' options={{
        headerShown:false
      }}/>
      <Stack.Screen
        name='login/index'
        options={{
          headerShown: false
        }}
      />
    </Stack>
    </ClerkLoaded>

  </ClerkProvider>)
}
