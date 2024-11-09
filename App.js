import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, Alert } from 'react-native';
import Cardapio from './components/Cardapio';
import TelaLogin from './components/TelaLogin';
import itens from './data/itens';

export default function App() {
    const [logado, setLogado] = useState(false); // Inicialmente definido como false
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [carrinhoItens, setCarrinhoItens] = useState([]);

    useEffect(() => {
        carregarDados();
    }, []);

    const useLocal = 1;

    const carregarDados = () => {
        if (useLocal !== 1) {
            fetch('http://192.168.1.176:5000/carregarDados')
                .then(response => response.json())
                .then(dadosJSON => {
                    console.log('Dados carregados:', dadosJSON);
                    setMenuItems(dadosJSON.itens);
                })
                .catch(error => {
                    console.error(error);
                    Alert.alert('Erro', 'Falha ao carregar os dados');
                });
        } else {
            const dadosJSON = {
                usuarios: [{ username: '1', password: '1' }],
                itens: itens,
            };

            setMenuItems(dadosJSON.itens);
        }
    };

    const fazerLogin = () => {
        if (username === '1' && password === '1') {
            setLogado(true);
        } else {
            Alert.alert('Erro', 'Credenciais inválidas');
        }
    };

    const adicionarAoCarrinho = (item) => {
        setCarrinhoItens([...carrinhoItens, item]);
    };

    return logado ? (
        <Cardapio
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