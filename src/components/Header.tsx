import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import icon from '../images/icon.png'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import StyleGuide from './StyleGuide'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 0.05,
  },

  img: {
    resizeMode: 'contain',
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    top: 10,
  },
})

export default function Header() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.img} />
      <RectButton
        rippleColor={StyleGuide.primary}
        style={styles.button}
        onPress={() => navigate('Search')}>
        <MaterialIcons name="search" size={30} color="#fff" />
      </RectButton>
    </View>
  )
}
