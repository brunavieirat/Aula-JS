var produtos = [
    {
        codigo: 211,
        image: {
        src: '"img/puma.jpg"',
        alt: "Puma"
        },
        nome : "Puma Golf Raglan Tech Polo Tee",
        color : '<div class="produto_color"></div>',
        size : "XXL",
        price : 72,
        qtd: {
            valor: 0,
        },
        total: 216
        
    },

    {
        codigo: 222,
        image : {
            src: '"img/Nike.jpg"',
            alt: "Nike"
        },
        nome : "Nike Men's Running Shoes",
        color : "orange",
        size : 43,
        price : 129,
        total: 129
    },

    {
        codigo: 333,
        image :{
            src: '"img/dc jaquet.jpg"',
            alt: "DC"
        },
        nome : "DC Men's Axis Snowboard Jacket",
        color : "blue",
        size : 5,
        price : 89,
        total: 178
    }
];



// document.getElementById('produto_nome').innerHTML = produtos[0].nome;
// document.getElementById('produto_color').innerHTML = "COLOR: " + produtos[0].color;



// document.getElementById('teste'.innerHTML) = descProd;





// document.getElementById('produto1').innerHTML  ="<img src= " +  produtos[0].image.src +" />";
// document.getElementById('produto_nome').innerHTML = produtos[0].nome + "<br> COLOR: " + produtos[0].color + "  SIZE: " + produtos[0].size;
// document.getElementById('produto_price').innerHTML = "$" + produtos[0].price;
// document.getElementById('produto_total').innerHTML = "$" + produtos[0].total;



// document.getElementById('produto2').innerHTML  ="<img src= " +  produtos[1].image.src +" />";
// document.getElementById('produto_nome2').innerHTML = produtos[1].nome + "<br> COLOR: " + produtos[1].color + " <p> SIZE: " + produtos[1].size;
// document.getElementById('produto_price2').innerHTML = "$" + produtos[1].price;
// document.getElementById('produto_total2').innerHTML = "$" + produtos[1].total;

// document.getElementById('produto3').innerHTML  ="<img src= " +  produtos[2].image.src +" />";
// document.getElementById('produto_nome3').innerHTML = produtos[2].nome + "<br> COLOR: " + produtos[2].color + " <p> SIZE: " + produtos[2].size;
// document.getElementById('produto_price3').innerHTML = "$" + produtos[2].price;
// document.getElementById('produto_total3').innerHTML = "$" + produtos[2].total;






// produtos[0].nome + "<br> COLOR: " + produtos[0].color + " <p> SIZE: " + produtos[0].size;
// document.getElementById('produto_img').innerHTML = "<img src= " + produtos[0].image + " alt="product 1" id="puma">"




function carregarProdutos() {

    event.preventDefault();

// var descProd = "";
var template = "";


// alert(descProd);
var total;

 for (var i = 0; i < produtos.length; i++){

     
    template += '<table> <tr class="produtos">   <td>     <div class="item_remove">     <img src="img/excluir.png" alt="remover produto">     </div>    </td>    ';
    
    template += '<td> <div class="item_img">   <img src=' +  produtos[i].image.src +' /> </div>    </td>'  ;

     template += '<td>  <div class = "item_desc">  <div class="produto_nome">'+ produtos[i].nome + '</div> <div> COLOR: ' + produtos[i].color + '  SIZE: ' + produtos[i].size +' </div> </div></td>  </td>  ';

     template += '<td> <div> '+ "$" + produtos[i].price + ' </div></td>     <td> <input type="number" id="' + produtos[i].codigo + '" onchange="obterQtd(this.id, this.value)"  > </td>  ';
    
    

     template += '<td> <div id=total-' + produtos[i].codigo +'> '+ produtos[i].total +'  </div> </td>  </tr></table>';
    
     

    //  var total = produtos[i].price * 

    }
  
  
    
    document.getElementById('ok').innerHTML = template;
    //  document.getElementById('teste').innerHTML = descProd;
}




function obterQtd(_codigo, _qtd){

for (var index = 0; index < produtos.length; index++) {
   
    if (produtos[index].codigo == _codigo) {
        
        produtos[index].qtd = _qtd;

        // //fazer as atualizaçoes 
         var totalProduto = produtos[index].price * produtos[index].qtd;
          var codProd = 'total-' + produtos[index].codigo;


         document.getElementById(codProd).innerHTML = "R$ " + totalProduto;

        console.log(produtos[index]);
    
    
        break;
    }
    
}

}




// function funcao(teste){

//     // for (var i = 0; i < produtos.length; i++){
        

//     var teste  = document.getElementById('qtd').value;
    

//     teste2 = (teste * produtos[0].price);
//     return teste2;
//     alert(teste2);
//     //  alert(produtos[0].total);
   
     

    

//     // }

    







