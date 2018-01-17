var dadosCliente = {
    endereco : {},
    contato : {}
};

function validarFormulario(){
    
    event.preventDefault();
    
    if(validarEndereco() && validarContato())
        console.log('validação está ok.. pode prosseguir');
    else 
        console.log('validação não passou.. preencher todos os campos');
}

function validarEndereco(){
    event.preventDefault();
   
    // var retorno = false;
    //gerar objeto endereco baseado nos dados do formulario
    objEndereco = {
        pais        : document.getElementById('selection_country').value,
        cidade      : document.getElementById('selection_city').value,
        estado      : document.getElementById('state').value,
        endereco1   : document.getElementById('ad1').value,
        endereco2   : document.getElementById('ad2').value,
    };
    
    // if(objEndereco.pais > 0 &&  objEndereco.cidade > 0 && objEndereco.estado.trim().lenght > 0 && objEndereco.endereco1.trim().lenght > 0 && objEndereco.endereco2.trim().lenght > 0 ){
    //      retorno = true;
    // } else {
    //     retorno = false;
    // }

    if (objEndereco.pais > 0 &&  objEndereco.cidade > 0 && objEndereco.estado.trim() != '' && objEndereco.endereco1.trim()!='' && objEndereco.endereco2.trim() != ''){
        return  true;
    } else {
        return  false;
    }


    // if (objEndereco.pais == 0){
    //     return false;
    // } if (objEndereco.cidade == 0){
    //     return false;
    // } if (objEndereco.estado.trim().length ==0 ){
    //     return false;
    // } if (objEndereco.endereco1.trim().length == 0){
    //     return false;
    // } if  (objEndereco.endereco2.trim() != ''){
    //     return false;
    // }
    // else {
    //     return true;
    // }

   
    // console.log(retorno);


}
  

function validarContato(){
 var retorno = false;
event.preventDefault();

    objContato = {
        nome        : document.getElementById('name').value,
        sobrenome   : document.getElementById('lastname').value,
        email       : document.getElementById('email').value,
        tel         : document.getElementById('phone').value

    };
     

    //  if (objContato.nome.trim() != '' && objContato.sobrenome.trim() != '' && objContato.email.trim() != '' && objContato.tel.trim() != ''){

    //      return true;

    //  } else {
    //      return false;
    //  }

    if (objContato.nome.trim() != '' && objContato.sobrenome.trim() != '' && objContato.email.trim() != '' && objContato.tel.trim() != '' )
    {
         return true;

     } else {
         return false;
     }

    if(document.getElementById('s_input').checked){

        var pacote = document.getElementById('s_input').value;
    }
    else if (document.getElementById('u_input').checked){

        var pacote = document.getElementById('u_input').value;
    }

    else{
        return false;
    }

    objContato = {
        pacote : pacote,
    };



     if (objContato.pacote.value != '' ){
         return true;

     } else {
         return false;
     }


    // }
    
}

