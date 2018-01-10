var clientes = [
    {
        nome  : "valor que foi digitado",
        idade : "15" 
    }
]; //variável global, vista por todas as funções

function cadastrarCliente() {
    event.preventDefault();
    
    var objNome  = document.getElementById('nome');
    //<input type="text" id="nome" value="valor que foi digitado" name="nome" placeholder="Seu nome aqui"><br>
    var objIdade = document.getElementById('idade');
    
    var cli       = new Object();
        cli.nome  = objNome.value;
        cli.idade = objIdade.value;
    
    clientes.push(cli);

    objNome.value   = '';
    objIdade.value  = '';
        
    console.log(clientes);
}

function listarClientes() {

    event.preventDefault();

    
    var listaClientes = "";
    for (var i = 0; i < clientes.length; i++) {
        listaClientes += "<p>Nome: " + clientes[i].nome + "   <br> Idade: " + clientes[i].idade + "</p>";

        console.log('aaa');
          
    }
    console.log(listaClientes);

     document.getElementById('resultado').innerHTML = listaClientes;
}