import React, {useState} from 'react';
import {View, Image, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert, Platform} from 'react-native';

const TelaPagamento = ({carrinhoItens: initialCarrinhoItens, onPedidoConcluido, onVoltar}) => {
    // Estado do carrinho e dos detalhes do pedido
    const [carrinhoItens, setCarrinhoItens] = useState(initialCarrinhoItens);
    const [formaPagamento, setFormaPagamento] = useState('Cartão de Crédito');
    const [endereco, setEndereco] = useState('');

    const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);

    // Função para remover item do carrinho
    const handleRemoverItem = (id) => {
        setCarrinhoItens((prevItens) => prevItens.filter((item) => item.id !== id));
    };

    const handleConcluirPedido = () => {
        if (endereco) {

            if (Platform.OS === 'web') {
                alert('Pedido Confirmado\nSeu pedido foi recebido e está sendo preparado!');
            } else {
                Alert.alert(
                    'Pedido Confirmado',
                    'Seu pedido foi recebido e está sendo preparado!',
                    [{text: 'OK', onPress: () => setCarrinhoItens([])}]
                );
            }

            setCarrinhoItens([]);
            onPedidoConcluido({carrinhoItens, formaPagamento, endereco, total});
        } else {
            Alert.alert('Erro', 'Por favor, adicione um endereço.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Botão de voltar */}
            <TouchableOpacity style={styles.backButton} onPress={onVoltar}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Resumo do Pedido</Text>

            <FlatList
                data={carrinhoItens}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Image source={{uri: item.imagem}} style={styles.imagem}/>

                        <View>
                            <Text style={styles.itemNome}>{item.nome}</Text>
                            {/* Descrição do produto (em branco) */}
                            <Text style={styles.itemDescricao}>{item.descricao}</Text>
                            <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleRemoverItem(item.id)}>
                            <Text style={styles.remover}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyMessage}>Seu carrinho está vazio.</Text>}
            />

            <View style={styles.secao}>
                <Text style={styles.label}>Total: R$ {total.toFixed(2)}</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Endereço de Entrega</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o endereço"
                    placeholderTextColor="#B0B0B0"
                    value={endereco}
                    onChangeText={setEndereco}
                />
            </View>

            <View style={styles.secao}>
                <Text style={styles.label}>Forma de Pagamento</Text>
                {/* Botões de escolha de forma de pagamento */}
                <TouchableOpacity onPress={() => setFormaPagamento('Cartão de Crédito')} style={styles.botaoPagamento}>
                    <Text style={[styles.opcao, formaPagamento === 'Cartão de Crédito' && styles.opcaoSelecionada]}>Cartão de Crédito</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFormaPagamento('Pix')} style={styles.botaoPagamento}>
                    <Text style={[styles.opcao, formaPagamento === 'Pix' && styles.opcaoSelecionada]}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFormaPagamento('Dinheiro')} style={styles.botaoPagamento}>
                    <Text style={[styles.opcao, formaPagamento === 'Dinheiro' && styles.opcaoSelecionada]}>Dinheiro</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoConcluir} onPress={handleConcluirPedido}>
                <Text style={styles.textoBotao}>Concluir Pedido</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B192C',
        paddingHorizontal: 20,
    },
    backButton: {
        marginTop: 40,
        padding: 10,
        backgroundColor: '#FF6500',
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginVertical: 5,
    },
    itemNome: {
        fontSize: 18,
        color: '#000000',
    },
    itemDescricao: {
        fontSize: 14,
        color: '#000000',
        marginVertical: 5,
    },
    itemPreco: {
        fontSize: 16,
        color: '#FF6500',
        marginTop: 5,
    },
    remover: {
        color: '#FF6500',
        fontWeight: 'bold',
    },
    secao: {
        marginVertical: 15,
    },
    imagem: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        padding: 10,
        borderRadius: 10,
    },
    botaoPagamento: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    opcao: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
    },
    opcaoSelecionada: {
        color: '#FF6500',
        fontWeight: 'bold',
    },
    botaoConcluir: {
        backgroundColor: '#FF6500',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyMessage: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginVertical: 20,
        fontSize: 16,
    },
});

export default TelaPagamento;
