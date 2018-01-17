var dadosCliente = {

    endereco : {


    },

    contato : {

    }
};


function validarFormulario(){

objEndereco = {
    pais: document.getElementById('country').value,
    cidade: document.getElementById('city').value,
    estado: document.getElementById('state').value,
    cep: document.getElementById('cep').value,
    end1: document.getElementById('address1').value,
    end2: document.getElementById('address2').value

    };



dadosCliente.endereco = objEndereco;
console.log (objEndereco);


objContato ={
    name: document.getElementById('firstName').value,
    sobrenome: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    fone: document.getElementById('phone').value,

};

dadosCliente.contato = objContato;
console.log(objContato);

}

function validarEndereco(_objEndereco){



}

function validarContato(_objContato){


}