var $total_linhas = 0;

var $dados = {}

function load()
{
    //total linhas
    if(localStorage.total_linhas == undefined){localStorage.total_linhas = 0};
    criarLinha(localStorage.total_linhas);

}

function salvar()
{
    //total linhas
    localStorage.total_linhas = parseInt($total_linhas);

    localStorage.dados = JSON.stringify($dados);
    console.log('localStorage.dados:', localStorage.dados);
}


function criarLinha(numero_linhas)
{
    let $numero_linhas = parseInt(numero_linhas);

    if($numero_linhas == undefined)
    {
        $numero_linhas = 0;
    }

    let repetidor1 = 0;
    while(repetidor1 < $numero_linhas)
    {
        //aumentadro de height
        document.querySelector('body').style.height =  "calc(100vh + " + (42 * $total_linhas) + "px)";

        // criar li
        let $li = document.createElement("li");
        $li.textContent =  $total_linhas + 1;
        $li.className = 'NUM';
        document.querySelector('ul').appendChild($li);

        let $data = document.createElement("div");
        $data.textContent = '';
        $data.className = 'CELL';
        $data.setAttribute('contenteditable','');
        document.querySelector('#COLUNA_DATA').appendChild($data);

        let $modelo = document.createElement("div");
        $modelo.textContent = '';
        $modelo.className = 'CELL';
        $modelo.setAttribute('contenteditable','');
        document.querySelector('#COLUNA_MODELO').appendChild($modelo);

        let $valor = document.createElement("div");
        $valor.textContent = '';
        $valor.className = 'CELL';
        $valor.setAttribute('contenteditable','');
        document.querySelector('#COLUNA_VALOR').appendChild($valor);

        // adiciona o número de linhas existentes
        $total_linhas = parseInt($total_linhas) + 1;
        repetidor1++;

        $dados['linha' + $total_linhas] = {'data':'','modelo':'','valor':''};
        console.log($dados);
    }
}

function deletarLinha()
{
    if ($total_linhas > 0)
    {
        document.querySelectorAll('li')[$total_linhas - 1].remove();
        document.querySelector('#COLUNA_DATA').querySelectorAll('div')[$total_linhas - 1].remove();
        document.querySelector('#COLUNA_MODELO').querySelectorAll('div')[$total_linhas - 1].remove();
        document.querySelector('#COLUNA_VALOR').querySelectorAll('div')[$total_linhas - 1].remove();
        $total_linhas = parseInt($total_linhas) - 1;
        console.log("Números de linhas:", $total_linhas);

        Object.keys($dados).pop();
        console.log($dados);

        
    }
};


function soma()
{
}
