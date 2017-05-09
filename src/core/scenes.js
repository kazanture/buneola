/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import { LoginScene } from '@Login/scenes'
import { SignupScene } from '@Signup/scenes'

export default Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginScene} title="Login" />
    <Scene key="signup" component={SignupScene} title="Signup" />
  </Scene>,
)

