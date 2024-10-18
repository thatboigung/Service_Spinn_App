import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        required
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        required
      />
      <Pressable style={styles.button}>
        <Text style={{ color: 'white', textAlign: 'center' }}>SignUp</Text>
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
  iconContainer: {
    width:'90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default SignUp;
