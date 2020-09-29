import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { Item, Input, Text, Button } from 'native-base';
import logoApp from '../assets/chatLogo.png';

export default function Login(props) {
  const { setUserName } = props;
  const [name, setName] = useState('');

  const onSubmit = () => {
    setUserName(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.logo} />
      </View>

      <Item>
        <Input
          placeholder="Nombre de usuario"
          style={styles.inputUserName}
          placeholderTextColor="#AAA"
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
        />
      </Item>
      <Button style={styles.btnLogin} onPress={onSubmit}>
        <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  inputUserName: {
    color: '#FFF',
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098D3',
    width: '100%',
  },
});
