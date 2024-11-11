import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import Cardapio from './components/Cardapio';
import TelaLogin from './components/TelaLogin';
import TelaPagamento from './components/TelaPagamento';
import itens from './data/itens';

export default function App() {
    const [logado, setLogado] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [carrinhoItens, setCarrinhoItens] = useState([]);
    const [telaAtual, setTelaAtual] = useState('TelaLogin');
    const [pedido, setPedido] = useState(null);

    useEffect(() => {
        carregarDados();
    }, []);

    const fazerPedido = () => {
        setTelaAtual('TelaPagamento');
    };

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
            setTelaAtual('Cardapio');
        } else {
            Alert.alert('Erro', 'Credenciais inválidas');
        }
    };

    const adicionarAoCarrinho = (item) => {
        setCarrinhoItens([...carrinhoItens, item]);
    };

    const handlePedidoConcluido = (pedido) => {
        setPedido(pedido);
        setCarrinhoItens([]);
        setTelaAtual('Cardapio');
        setPedido(null);
    };

    return (
        <View style={{flex: 1}}>
            {telaAtual === 'TelaLogin' && (
                <TelaLogin.Login
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    fazerLogin={fazerLogin}
                />
            )}
            {telaAtual === 'Cardapio' && (
                <Cardapio
                    menuItems={menuItems}
                    adicionarAoCarrinho={adicionarAoCarrinho}
                    carrinhoItens={carrinhoItens}
                    fazerPedido={fazerPedido}
                />
            )}
            {telaAtual === 'TelaPagamento' && (
                <TelaPagamento
                    carrinhoItens={carrinhoItens}
                    onPedidoConcluido={handlePedidoConcluido}
                    onVoltar={() => setTelaAtual('Cardapio')} // Adicionamos esta linha
                />
            )}
        </View>
    );
}
