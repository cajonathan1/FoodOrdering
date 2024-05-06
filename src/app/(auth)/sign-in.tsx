import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import Colors from "../constants/Colors";
import { Link, Stack } from "expo-router";

const SignInScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Stack.Screen options={{  title: 'Sign in', headerTitleAlign: 'center' }}/>
      <Text style={styles.label}>Email</Text>
      <TextInput 
      value={email}
      onChangeText={setEmail}
      placeholder='jon@gmail.com'
      style={styles.input} 
      keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
      value={password}
      style={styles.input}
      onChangeText={setPassword}
      placeholder=""
      secureTextEntry 
      />

      <Button text="Sign in"/>
      <Link href="/sign-up" style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
  },
});

export default SignInScreen;