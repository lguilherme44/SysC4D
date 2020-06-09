import React, { useState, useEffect } from 'react';

import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';

import { Container, Titulo, Button, InputLogin } from '../styles';

export default function Login({ navigation }) {
  const [focusLogin, setFocusLogin] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitApi = async () => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    if (response) {
      await AsyncStorage.setItem('userName', response.data.user.nome);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userToken', response.data.token);

      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('userToken').then((user) => {
      if (user) {
        navigation.navigate('Home');
      }
    });
  }, []);

  return (
    <Container>
      <Titulo style={{ fontSize: 55, margin: 20 }}>SYSC4D</Titulo>
      <InputLogin
        placeholder='Login'
        focus={focusLogin}
        onFocus={() => setFocusLogin(true)}
        onBlur={() => setFocusLogin(false)}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputLogin
        placeholder='Senha'
        focus={focusPassword}
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button onPress={handleSubmitApi}>
        <Titulo>Logar</Titulo>
      </Button>
    </Container>
  );
}
