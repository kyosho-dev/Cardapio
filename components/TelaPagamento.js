// components/TelaPagamento.js
import React from 'react';
import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';

export default function TelaPagamento({ carrinhoItens, concluirPedido }) {
    const total = carrinhoItens.reduce((acc, item) => acc + item.preco, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Pagamento</Text>

            <FlatList
                data={carrinhoItens}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
                    </View>
                )}
            />

            <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
            <Button title="Concluir Pedido" onPress={() => Alert.alert('Pedido realizado!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#B43F3F',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 5,
        borderRadius: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'right',
    },
});
