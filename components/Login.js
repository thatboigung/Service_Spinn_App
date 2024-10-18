import React, { useState } from 'react';
import { View, TextInput, Pressable, ActivityIndicator, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Welcome Back</Text>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={{ color: 'white', textAlign: 'center' }}>LogIn</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 500,
  },
  input: {
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: 'rgb(240, 237, 237)',
  },
  button: {
    backgroundColor: 'rgb(56, 66, 252)',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },

});

export default Login;