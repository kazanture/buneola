import React from 'react'
import { Actions } from 'react-native-router-flux'
import Link from '@components/Link'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'



const background = require('./login1_bg.png')
const mark = require('./login1_mark.png')
const lockIcon = require('./login1_lock.png')
const personIcon = require('./login1_person.png')


const LoginScene = () => {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.background} resizeMode="cover">
        <View style={styles.markWrap}>
          <Image source={mark} style={styles.mark} resizeMode="contain" />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={personIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#FFF"
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.iconWrap}>
              <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <TextInput
              placeholderTextColor="#FFF"
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.signupWrap}>
            <Text style={styles.accountText}> Don&apos;t have an account? </Text>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Link style={styles.signupLinkText} onPress={Actions.signup}>
                  Sign Up
                </Link>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    </View>
  )
}

export default LoginScene

