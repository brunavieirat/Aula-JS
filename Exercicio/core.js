var produtos = [
    {
        image : "img/puma.jpg",
        nome : "Puma Golf Raglan Tech Polo Tee",
        color : "15",
        size : "XXL",
        price : 72
        // total: 216
    },

    {
        image : "teste",
        nome : "Puma Golf Tech Polo Tee",
        color : "15",
        size : "XXL",
        price : 72
        // total: 216
    }
];

var teste = "teste";


// var listaProdutos = "";
// for (var i = 0; i < produtos.length; i++) {
//     // listaProdutos += "<p>Nome: " + clientes[i].nome + "   <br> Idade: " + clientes[i].idade + "</p>";

//     // listaProdutos += produtos[i].image + " <p>  " + produtos[i].nome + "<br> COLOR: " + produtos[i].color + " SIZE " + produtos[i].size

//     listaProdutos += produtos[i].image + " <p>  " + produtos[i].nome;
    
      
// }

teste=produtos[0].price;

// document.getElementById('produto_nome').innerHTML = produtos[0].nome;
// document.getElementById('produto_color').innerHTML = "COLOR: " + produtos[0].color;

document.getElementById('produto_nome').innerHTML = produtos[0].nome + "<br> COLOR: " + produtos[0].color + " <p> SIZE: " + produtos[0].size;
document.getElementById('produto_price').innerHTML = "$" + produtos[0].price;
// document.getElementById('produto_img').innerHTML = "<img src= " + produtos[0].image + " alt="product 1" id="puma">"



