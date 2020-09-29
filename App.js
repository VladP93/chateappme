import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

export default function App() {
  const [userName, setUserName] = useState(null);

  return (
    <Container style={styles.Container}>
      {!userName ? <Login /> : <Chat />}
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#16202b',
  },
});
