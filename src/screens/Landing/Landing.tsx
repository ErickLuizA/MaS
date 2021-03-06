import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import StyleGuide from '../../components/StyleGuide'

import cinema from '../../images/cinema.png'
import mas from '../../images/mas.png'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleGuide.background,
    paddingHorizontal: 20,
  },

  image: {
    width: width * 0.8,
    resizeMode: 'contain',
  },

  icon: {
    width: width * 0.8,
    marginBottom: 10,
  },

  button: {
    width: width * 0.8,
    backgroundColor: StyleGuide.primary,
    paddingVertical: 15,
    borderRadius: width * 0.4,
  },

  buttonText: {
    fontFamily: 'Roboto_300Light',
    color: StyleGuide.text,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default function Landing() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={cinema} style={styles.image} />
      <Image source={mas} style={styles.icon} />
      <RectButton style={styles.button} onPress={() => navigate('BottomTab')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </RectButton>
    </View>
  )
}
