import pizzaImage from '../assets/pizza.jpeg';

let filteredItems = [];

function filterItens(itensId) {
    filteredItems = itensId.filter((item) => item.nome === 'Pizza 2');
    return filteredItems;
}

const itens = [
    {
        id: 1,
        nome: 'O Tradicional',
        descricao: 'Hambúrguer clássico com queijo, bacon, alface, tomate e molho especial.',
        preco: 35.9,
        imagem: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
    },
    {
        id: 2,
        nome: 'Cheddar Lovers',
        descricao: 'Carne suculenta com muito cheddar, cebola caramelizada e bacon.',
        preco: 25.9,
        imagem: "https://images.pexels.com/photos/16108602/pexels-photo-16108602/free-photo-of-comida-alimento-refeicao-pouco-saudavel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        nome: 'Gigante do chef',
        descricao: 'Três carnes artesanais, queijo derretido, bacon crocante, cebola caramelizada e molho especial do chef.',
        preco: 35.9,
        imagem: "https://images.pexels.com/photos/12325114/pexels-photo-12325114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        nome: 'Big Bang',
        descricao: 'Hambúrguer explosivo com carne dupla, cheddar, cebola caramelizada e bacon.',
        preco: 25.9,
        imagem: "https://images.pexels.com/photos/10922930/pexels-photo-10922930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 5,
        nome: 'Trufado Premium',
        descricao: 'Carne bovina com queijo gruyè, cebola caramelizada, bacon e azeite trufado',
        preco: 35.9,
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/b5081aa54ad470ff4039ef00a5cbf9d3_XL.jpg",
    },
    {
        id: 6,
        nome: 'Monstro de Bacon',
        descricao: 'Para os amantes de bacon: carne, crispy de bacon, cheddar e mollho barbecue',
        preco: 25.9,
        imagem: "https://images.pexels.com/photos/28902882/pexels-photo-28902882.jpeg",
    },
    {
        id: 7,
        nome: 'Rústico do Campo',
        descricao: 'Hambúrguer com queijo, bacon, picles e molho de mostarda e mel.',
        preco: 35.9,
        imagem: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 8,
        nome: 'Veggie Power',
        descricao: 'Hambúrguer de grão de bico com alface tomate e um delicioso molho de ervas.',
        preco: 25.9,
        imagem: "https://images.pexels.com/photos/1431305/pexels-photo-1431305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

export default itens;
