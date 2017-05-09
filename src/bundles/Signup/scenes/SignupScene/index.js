import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

const background = require('./signup_bg.png')
const backIcon = require('./back.png')
const personIcon = require('./signup_person.png')
const lockIcon = require('./signup_lock.png')
const emailIcon = require('./signup_email.png')
const birthdayIcon = require('./signup_birthday.png')

const SignupScene = () => {
  return (
    <View style={styles.container}>
      <Image
        source={background}
        style={[styles.container, styles.bg]}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>

          <View style={styles.headerIconView}>
            <TouchableOpacity style={styles.headerBackButtonView}>
              <Image
                source={backIcon}
                style={styles.backButtonIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.headerTitleView}>
            <Text style={styles.titleViewText}>Sign Up</Text>
          </View>

        </View>

        <View style={styles.inputsContainer}>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={personIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Name"
              placeholderTextColor="#FFF"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={emailIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Email"
              placeholderTextColor="#FFF"
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={lockIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
            <TextInput
              secureTextEntry
              style={[styles.input, styles.whiteFont]}
              placeholder="Password"
              placeholderTextColor="#FFF"
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={birthdayIcon}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            </View>
          </View>

        </View>

        <View style={styles.footerContainer}>

          <TouchableOpacity>
            <View style={styles.signup}>
              <Text style={styles.whiteFont}>Join</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.signin}>
              <Text style={styles.greyFont}>Already have an account?
                <Text style={styles.whiteFont}> Sign In</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Image>
    </View>
  )
}

export default SignupScene

