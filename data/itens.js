import pizzaImage from '../assets/pizza.jpeg';

let filteredItems = [];

function filterItens(itensId) {
    filteredItems = itensId.filter((item) => item.nome === 'Pizza 2');
    return filteredItems;
}

const itens = [
    {
        id: 1,
        nome: 'Pizza 2',
        descricao: 'Deliciosa pizza de margherita',
        preco: 35.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 2,
        nome: 'Hambúrguer',
        descricao: 'Hambúrguer artesanal',
        preco: 25.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 3,
        nome: 'Pizza 2',
        descricao: 'Deliciosa pizza de margherita',
        preco: 35.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 4,
        nome: 'Hambúrguer',
        descricao: 'Hambúrguer artesanal',
        preco: 25.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 5,
        nome: 'Pizza 2',
        descricao: 'Deliciosa pizza de margherita',
        preco: 35.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 6,
        nome: 'Hambúrguer',
        descricao: 'Hambúrguer artesanal',
        preco: 25.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 7,
        nome: 'Pizza 2',
        descricao: 'Deliciosa pizza de margherita',
        preco: 35.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 8,
        nome: 'Hambúrguer',
        descricao: 'Hambúrguer artesanal',
        preco: 25.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
];

export default itens;
