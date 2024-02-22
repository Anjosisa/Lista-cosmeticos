const tabela = document.querySelector('.tabela-js')

////////////// GET //////////////

axios.get('http://127.0.0.1:5000/list').then(function (resposta) {

    console.log(resposta.data);
}).catch(function (error) {
    console.log(error)
})

////////////// POST //////////////
const addBtn = document.querySelector(".add_modal");

addBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const produtoInput = document.getElementById("nome")
    const novoProduto = produtoInput.value;
    const marcaInput = document.getElementById("marca");
    const novaMarca = marcaInput.value;
    const valorInput = document.getElementById("valor");
    const novoValor = valorInput.value;

    if (novoProduto !== "" && novaMarca !== "" && novoValor !== "") {
        axios.post('http://127.0.0.1:5000/add', { PRODUTO: novoProduto, MARCA: novaMarca, VALOR: novoValor })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Erro na requisição POST', error);
            });

        produtoInput.value = "";
        marcaInput.value = "";
        valorInput.value = "";
    } else {
        console.log("Erro: O campo de Produto, Marca ou Valor está vazio.")
    }
});

