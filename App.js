import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

//Importa os componentes que geram as imagens
import Cardapio from './components/Cardapio';
import TelaLogin from './components/TelaLogin.js';

// Importe as imagens locais
import pizzaImage from './assets/pizza.jpeg';
import hamburguerImage from './assets/hamburguer.jpeg';

// Componente principal App
export default function App() {
  const [logado, setLogado] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [carrinhoItens, setCarrinhoItens] = useState([]);

  useEffect(() => {
    carregarDados();
  }, []);

  //Carrega os dados de um .JSON
  const carregarDados = async () => {
  try {
    const response = await fetch('http://192.168.1.176:5000/carregarDados');
    if (!response.ok) {
      throw new Error('Erro ao carregar dados');
    }
    const dadosJSON = await response.json();
    console.log('Dados carregados:', dadosJSON); // Log aqui
    setMenuItems(dadosJSON.itens);
  } catch (error) {
    console.error(error);
    Alert.alert('Erro', 'Falha ao carregar os dados');
  }
};

  // Faz o login
  const fazerLogin = () => {
    // Verifica as credenciais
    if (username === '1' && password === '1') {
      setLogado(true);
    } else {
      Alert.alert('Erro', 'Credenciais inválidas');
    }
  };

  const adicionarAoCarrinho = (item) => {
    setCarrinhoItens([...carrinhoItens, item]);
  };

  // compara se esta logao e escolhe o que vai ser exibido
  return logado ? (
    <Cardapio.TelaCardapio
      menuItems={menuItems}
      adicionarAoCarrinho={adicionarAoCarrinho}
      carrinhoItens={carrinhoItens}
    />
  ) : (
    <TelaLogin.Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      fazerLogin={fazerLogin}
    />
  );
}
