import React from 'react';
import { View, Text, FlatList, Image, Alert, StyleSheet, Pressable } from 'react-native';

const Cardapio = ({ menuItems, adicionarAoCarrinho, carrinhoItens }) => {
  const totalCarrinho = carrinhoItens.reduce((total, item) => total + item.preco, 0);

  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Cardápio</Text>
        <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Pressable style={styles.itemMenu} onPress={() => adicionarAoCarrinho(item)}>
                  <Image source={{ uri: item.imagem }} style={styles.imagem} />
                  <View style={styles.infoItem}>
                    <Text style={styles.nomeItem}>{item.nome}</Text>
                    <Text>{item.descricao}</Text>
                    <Text>R$ {item.preco.toFixed(2)}</Text>
                    <Pressable
                        style={styles.addButton}
                        onPress={() => adicionarAoCarrinho(item)}
                    >
                      <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
                    </Pressable>
                  </View>
                </Pressable>
            )}
        />
        <View style={styles.carrinho}>
          <Text>Total do Carrinho: R$ {totalCarrinho.toFixed(2)}</Text>
          <Pressable style={styles.button} onPress={() => Alert.alert('Pedido realizado!')}>
            <Text style={styles.text}>FAZER PEDIDO</Text>
          </Pressable>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF6500',
  },
  titulo: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: '#FFFFFF',
  },
  itemMenu: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
  },
  imagem: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 30,
  },
  infoItem: {
    flex: 1,
  },
  nomeItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carrinho: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 1,
    paddingHorizontal: 1,
    backgroundColor: '#1E3E62',
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#1E3E62',
    borderRadius: 50,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Cardapio;
