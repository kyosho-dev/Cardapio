import React from 'react';
import { View, Text, FlatList, Image, Alert, StyleSheet, Pressable, ActivityIndicator, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Cardapio = ({ menuItems, adicionarAoCarrinho, carrinhoItens }) => {
  const totalCarrinho = carrinhoItens.reduce((total, item) => total + item.preco, 0);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#FF6500" />
        </View>
    );
  }

  return (
      <ImageBackground
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/6eae/1337/4b15b98e4c2bfda49c68d837dc2eeb1c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSI8kF73eAeu6Xur3ESq7K7RQYUyLgFBUqGVaRSfDHyTtFMkQKA--GyRhiwvIZ1Gt0~HYr9SScv~t1GFKHMi7krtm7tGh-yifEZs3sKQoc7sroErvFR-1t1J0nMHYX29K0DGoS7OtmObUQ~FyQih4iFVIj7SXzgeyeTifS~Wx5FRXESjT5ZGZBsHC6wSrZKELq6ldM~GbXXOrmUyIndwf9ZAF64a6TBf-J9UqI1ZotmhVau7fv8t0eohMSZaXpQ1jLRXoNTe1k~9xPzV-DY07waLUDAKBrmal74XeOdM1hrYL9LzKYaV6wise8Fj3K86UJPqhui85RAn9Ou~gI439A__' }}
          style={styles.container}
      >
        <Text style={styles.titulo}>Cardápio</Text>
        <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Pressable style={styles.itemMenu} onPress={() => adicionarAoCarrinho(item)}>
                  <Image source={{ uri: item.imagem }} style={styles.imagem} />
                  <View style={styles.infoItem}>
                    <Text style={styles.nomeItem}>{item.nome}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text>
                    <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
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
          <Text style={styles.totalText}>Total do Carrinho: R$ {totalCarrinho.toFixed(2)}</Text>
          <Pressable style={styles.button} onPress={() => Alert.alert('Pedido realizado!')}>
            <Text style={styles.text}>FINALIZAR PEDIDO</Text>
          </Pressable>
        </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#173B45',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6500',
  },
  titulo: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  itemMenu: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: '#1E3E62',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 150,
    marginRight: 20,
    borderRadius: 20,
  },
  infoItem: {
    flex: 1,
  },
  nomeItem: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 5,
  },
  descricao: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#FFF',
    marginBottom: 10,
  },
  preco: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FF6500',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  carrinho: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  totalText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FF6500',
  },
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Cardapio;
