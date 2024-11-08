import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

export default class TelaLogin {
  static Login({ username, setUsername, password, setPassword, fazerLogin }) {
    return (
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={fazerLogin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  input: {
    width: '80%', // Define a largura dos inputs
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    width: '80%', // Define a largura do botão
    marginTop: 10,
  },
});
