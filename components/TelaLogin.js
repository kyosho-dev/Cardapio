import React from 'react';
import { View, Button, StyleSheet, TextInput, Image } from 'react-native';
import logoImage from '../assets/iGordo.jpg';

const TelaLogin = ({ username, setUsername, password, setPassword, fazerLogin }) => {
  return (
    <View style={styles.loginContainer}>
      <Image
        source={logoImage} // Utiliza a imagem localmente
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#FFFFFFA6" // Cor do placeholder com 65% de transparência
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#FFFFFFA6" // Cor do placeholder com 65% de transparência
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={fazerLogin}
          color="#FF8B38" // Cor do botão de login
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#173B45', // Fundo principal da tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  logo: {
    width: 80, // Define largura e altura iguais para manter o formato quadrado
    height: 80,
    borderRadius: 15, // Define bordas arredondadas nas pontas
    marginBottom: 20, // Espaço abaixo da imagem
  },
  input: {
    width: '80%', // Define a largura dos inputs
    height: 40,
    backgroundColor: '#2d5e6b', // Cor de fundo das caixas de texto
    color: '#FFF', // Cor do texto digitado
    borderRadius: 10, // Arredonda as pontas dos inputs
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%', // Define a largura do botão
    marginTop: 10,
  },
});

export default TelaLogin;