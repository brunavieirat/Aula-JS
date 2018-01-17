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
   
    var retorno = false;
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

    if(objEndereco.pais > 0 &&  objEndereco.cidade > 0 && objEndereco.estado.trim() != '' && objEndereco.endereco1.trim()!='' && objEndereco.endereco2.trim() != ''){
        retorno = true;
    }

    // console.log (retorno);

    // && objEndereco.endereco1.trim().lenght > 0 && objEndereco.endereco2.trim().lenght > 0 

    console.log(retorno);
    // if(objEndereco.pais > 0){
    //     retorno = true;
    // } else {
    //     retorno = false;
    // }

    // if(objEndereco.cidade > 0){
    //     retorno = true;
    // } else {
    //     retorno = false;
    // }


    // if(objEndereco.estado.trim().lenght > 0){

    //     retorno = true;
    // } else {
    //     retorno = false;
    // }


    // if(objEndereco.endereco1.trim().lenght > 0){

    //     retorno = true;
    // } else {
    //     retorno = false;
    // }


    // if(objEndereco.endereco2.trim().lenght > 0){

    //     retorno = true;
    // } else {
    //     retorno = false;
    // }




    


    
    //verificar se os dados estão preenchidos
//     if( objEndereco.pais.trim().lenght == 0 ) {
//         retorno = true;
//         return retorno;
    
//     //retorno da função
// }

}
  

function validarContato( _objContato ){


    objContato = {
        nome        : document.getElementById('name').value,
        sobrenome   : document.getElementById('lastname').value,
        email       : document.getElementById('email').value,
        tel         : document.getElementById('phone')

    };

}

