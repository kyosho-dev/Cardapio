import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList, Image, StyleSheet, Alert,} from 'react-native';
import Cardapio from './components/Cardapio';
import TelaLogin from './components/TelaLogin.js';
import itens from './data/itens';

// Importe as imagens locais

export default function App() {
    const [logado, setLogado] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [carrinhoItens, setCarrinhoItens] = useState([]);

    useEffect(() => {
        carregarDados();
    }, []);

    const carregarDados = () => {
        // Simula a leitura de um arquivo JSON
        const dadosJSON = {
            usuarios: [{username: '1', password: '1'}],
            itens: itens,
        };

        // Duplica os itens concatenando o array consigo mesmo, usar apenas se for necesario
        const itensDuplicados = [
            ...dadosJSON.itens,
            ...dadosJSON.itens.map((item, index) => ({
                ...item,
                id: item.id + dadosJSON.itens.length,
            })),
        ];

        setMenuItems(dadosJSON.itens);
    };

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

    return logado ? (
        <Cardapio.TelaCardapio
            menuItems={menuItems}
            adicionarAoCarrinho={adicionarAoCarrinho}
            carrinhoItens={carrinhoItens}
        />
    ) : (
        <TelaLogin
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            fazerLogin={fazerLogin}
        />
    );
}
