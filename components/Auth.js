import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './Login';
import Signup from './Singup';
import { Icon } from 'react-native-elements';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <View
        style={{
          backgroundColor: 'rgb(56, 66, 252)',
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>
          ServiceSpin
        </Text>
        <Text style={{ color: 'white' }}>
          Your one-stop solution for all services.
        </Text>
      </View>

      <View
        style={{ padding: 20, marginTop: -50, backgroundColor: 'white', borderRadius: 20 }}
      >
        {isLogin ? <Login toggleLoginSignup={toggleLoginSignup} /> : <Signup toggleLoginSignup={toggleLoginSignup} />}

        <Text style={{marginTop:10}}>
          {isLogin ? 'Dont Have an account?' : 'Already have an account?'}
          <Text style={{ color: 'blue' }} onPress={toggleLoginSignup}>
            {isLogin ? ' SignUp' : ' Login'}
          </Text>
        </Text>
         <Text style={{ marginTop: 10 }}>Or Continue With</Text>
      <View style={styles.iconContainer}>
        <Icon name="google" type="font-awesome" size={38} color="red" />
        <Icon name="facebook-f" type="font-awesome" size={38} color="blue" />
        <Icon name="apple" type="font-awesome" size={38} color="black" />
        <Icon name="linkedin" type="font-awesome" size={38} color="blue" />
      </View>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({

  iconContainer: {
    width:'90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Auth;