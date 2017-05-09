/* @flow */

import React from 'react'
import { View, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'

const LaunchScene = () => {
  console.log('LaunchScene')
  return (
    <View style={styles.container}>
      <Title>Hello theretest 😃 !</Title>
      <TextInput>Login</TextInput>
      <TextInput>Password</TextInput>
      <Link onPress={Actions.counter}>
        Go to counter
      </Link>
    </View>
  )
}

export default LaunchScene
