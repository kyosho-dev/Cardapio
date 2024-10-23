import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, Button, FlatList, Image, StyleSheet, Alert,
} from 'react-native';

//Importa os componentes que geram as imagens 
import Cardapio from './components/Cardapio';
import TelaLogin from './components/TelaLogin.js';

// Importe as imagens locais
import pizzaImage from './assets/pizza.jpeg';
import hamburguerImage from './assets/hamburguer.jpeg';



// Componente principal App
export default function App() {
  const [logado, setLogado] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [carrinhoItens, setCarrinhoItens] = useState([]);


  useEffect(() => {
    carregarDados();
  }, []);

  //Carrega os dados de um .JSON 
  const carregarDados = () => {
    // Simula a leitura de um arquivo JSON
    const dadosJSON = {
      usuarios: [{ username: '1', password: '1' }],
      itens: [
        {
          id: 1,
          nome: 'Pizza 2',
          descricao: 'Deliciosa pizza de margherita',
          preco: 35.9,
          imagem: pizzaImage,
        },
        {
          id: 2,
          nome: 'Hambúrguer',
          descricao: 'Hambúrguer artesanal',
          preco: 25.9,
          imagem: hamburguerImage,
        },
        {
          id: 3,
          nome: 'Hambúrguer',
          descricao: 'Hambúrguer artesanal',
          preco: 25.9,
          imagem: hamburguerImage,
        },
        {
          id: 4,
          nome: 'Hambúrguer',
          descricao: 'Hambúrguer artesanal',
          preco: 25.9,
          imagem: hamburguerImage,
        },
        {
          id: 5,
          nome: 'Hambúrguer',
          descricao: 'Hambúrguer artesanal',
          preco: 25.9,
          imagem: hamburguerImage,
        },
        {
          id: 6,
          nome: 'Hambúrguer',
          descricao: 'Hambúrguer artesanal',
          preco: 25.9,
          imagem: hamburguerImage,
        },
        {
          id: 7,
          nome: 'Hambúrguer',
          descricao: 'Hambúrguer artesanal',
          preco: 25.9,
          imagem: hamburguerImage,
        },
      ],
    };

    // Duplica os itens concatenando o array consigo mesmo, usar apenas se for necesario 
    const itensDuplicados = [
      ...dadosJSON.itens,
      ...dadosJSON.itens.map((item, index) => ({
        ...item,
        id: item.id + dadosJSON.itens.length, // Garante que os IDs dos itens duplicados sejam únicos
      })),
    ];

    setMenuItems(dadosJSON.itens);
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


