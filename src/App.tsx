import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './config/exa-theme'
import { TempScreens } from './presentation/screens/TempScreens'
import { ColorsScreens } from './presentation/screens/ColorsScreens'

export const App = () => {
  return (
    <View style={styles.background}>
      {/* <TempScreens/> */}
      <ColorsScreens/>
    </View>
  )
}
