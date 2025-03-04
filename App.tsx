import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
     <Navigation />
    </SafeAreaProvider>
  )
}

export default App