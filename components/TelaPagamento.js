import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TelaPagamento = ({ carrinhoItens }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Pagamento</Text>
            <FlatList
                data={carrinhoItens}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome}</Text>
                        <Text>R$ {item.preco.toFixed(2)}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
});

export default TelaPagamento;