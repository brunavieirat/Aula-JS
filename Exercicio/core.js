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

     template += '<td> <div> $' + produtos[i].price + ' </div></td>     <td> <input type="number" id="' + produtos[i].codigo + '" onchange="obterQtd(this.id, this.value)"  > </td>  ';
    
    //  template +=     '<span id="v1" class="product__value"><strong>R$ </strong>'+produtos[i].preco+'</span>*<input type="number" onchange="atualizarQuantidade(this.id, this.value)" value="'+produtos[i].qtd+'" name="" id="'+produtos[i].codigo+'"> = <strong>R$ </strong><span id="total-'+produtos[i].codigo+'">'+totalProduto+'</span>';
    //     template += '</div>';

     template += '<td> <div id=total-' + produtos[i].codigo +'> '+ produtos[i].total +'  </div> </td>  </tr></table>';

     

    //  var total = produtos[i].price * 
    

    }
  
  
    
    document.getElementById('ok').innerHTML = template;
    document.getElementById("total-geral").innerHTML = totalGeral;
    // document.getElementById('subtotal').innerHTML = subtotal;

     
    //  document.getElementById('teste').innerHTML = descProd;
}




function obterQtd(_codigo, _qtd, _subtotal){



for (var index = 0; index < produtos.length; index++) {
   
    if (produtos[index].codigo == _codigo) {
        
        produtos[index].qtd = _qtd;

        // //fazer as atualizaçoes 
         var totalProduto = produtos[index].price * produtos[index].qtd;
         var codProd = 'total-' + produtos[index].codigo;


            var totalAntigo = document.getElementById(codProd).innerHTML;
            console.log(totalAntigo);
            totalGeral = (totalGeral - totalAntigo) + novoTotal;
            
            document.getElementById(codProd).innerHTML = novoTotal.toFixed(2);
            //atualizar o total geral
            document.getElementById('total-geral').innerHTML = totalGeral.toFixed(2);
         
        //  document.getElementById(codProd).innerHTML = "R$ " + totalProduto;

        // console.log(produtos[index]);
    
    
        break;
    }
    
      
}

}










    







