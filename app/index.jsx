import { useUser } from '@clerk/clerk-expo'
import { Link, Redirect, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function Index () {
  const { user } = useUser()

  const rootNavigation = useRootNavigationState()

  useEffect(() => {
  console.log({user})
console.log({rootNavigation})
    checkNavigationLoaded()
  }, [user])

  const checkNavigationLoaded = () => {
    if (!rootNavigation.key) {
      console.log("no key found")
      return null
    }
  }

  return <View
        style={{
          flex: 1
        }}
      >
        {user ? (
          <>
            <Redirect href={'/login/'} />
          </>
        ) : (
          <>
            <Redirect href={'/(tabs)/home'} />
          </>
        )}
      </View>
    
}
