var produtos = [
    {
        // image : "img/puma.jpg",
        nome : "Puma Golf Raglan Tech Polo Tee",
        color : "15",
        size : "XXL",
        price : 72,
        total: 216
    },

    {
        // image : "teste",
        nome : "Nike Men's Running Shoes",
        color : "orange",
        size : 43,
        price : 129,
        total: 129
    },

    {
        // image : "DC Men's Axis Snowboard Jacket",
        nome : "DC Men's Axis Snowboard Jacket",
        color : "blue",
        size : 5,
        price : 89,
        total: 178
    }
];

var teste = "teste";



// document.getElementById('produto_nome').innerHTML = produtos[0].nome;
// document.getElementById('produto_color').innerHTML = "COLOR: " + produtos[0].color;


// var descProd = "";

// for (var i = 0; i =2; i++){

//     descProd += produtos[0].nome + "<br> COLOR: " + produtos[0].color + " <p> SIZE: " + produtos[0].size;
// }

// document.getElementById('teste'.innerHTML) = descProd;

document.getElementById('produto_nome').innerHTML = produtos[0].nome + "<br> COLOR: " + produtos[0].color + " <p> SIZE: " + produtos[0].size;
document.getElementById('produto_price').innerHTML = "$" + produtos[0].price;
document.getElementById('produto_total').innerHTML = "$" + produtos[0].total;

document.getElementById('produto_nome2').innerHTML = produtos[1].nome + "<br> COLOR: " + produtos[1].color + " <p> SIZE: " + produtos[1].size;
document.getElementById('produto_price2').innerHTML = "$" + produtos[1].price;
document.getElementById('produto_total2').innerHTML = "$" + produtos[1].total;

document.getElementById('produto_nome3').innerHTML = produtos[2].nome + "<br> COLOR: " + produtos[2].color + " <p> SIZE: " + produtos[2].size;
document.getElementById('produto_price3').innerHTML = "$" + produtos[2].price;
document.getElementById('produto_total3').innerHTML = "$" + produtos[2].total;

// produtos[0].nome + "<br> COLOR: " + produtos[0].color + " <p> SIZE: " + produtos[0].size;
// document.getElementById('produto_img').innerHTML = "<img src= " + produtos[0].image + " alt="product 1" id="puma">"



