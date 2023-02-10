var $total_linhas = 0;

var $dados = {};

function load()
{
    // Resgatando o Total linhas
    if(localStorage.total_linhas == undefined){localStorage.total_linhas = 0};
    criarLinha(localStorage.total_linhas);

    // Desconvertendo de JSON para Objeto
    $dados = JSON.parse(localStorage.dados);
    console.log('$dados:', $dados)

    // Adcionar os valores armazenados em $dados nas suas respectivas células
    for(let counter = 0; counter < $total_linhas; counter++)
    {
        document.querySelector('#data' + (counter+1)).textContent = $dados['linha' + (counter+1)].data;

        document.querySelector('#modelo' + (counter+1)).textContent = $dados['linha' + (counter+1)].modelo;
        
        document.querySelector('#valor' + (counter+1)).textContent = $dados['linha' + (counter+1)].valor;
    }
};

function salvar()
{
    // Guardando o Total linhas
    localStorage.total_linhas = parseInt($total_linhas);

    // Convertendo $dados para JSON
    localStorage.dados = JSON.stringify($dados);

    console.log('localStorage.dados:', localStorage.dados)
};


function criarLinha(numero_linhas)
{
    let $numero_linhas = parseInt(numero_linhas);

    if($numero_linhas == undefined)
    {
        $numero_linhas = 0
    };

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
        $data.id = 'data' + ($total_linhas + 1);
        $data.setAttribute('contenteditable','');
        document.querySelector('#COLUNA_DATA').appendChild($data);

        let $modelo = document.createElement("div");
        $modelo.textContent = '';
        $modelo.className = 'CELL';
        $modelo.id = 'modelo' + ($total_linhas + 1);
        $modelo.setAttribute('contenteditable','');
        document.querySelector('#COLUNA_MODELO').appendChild($modelo);

        let $valor = document.createElement("div");
        $valor.textContent = '';
        $valor.className = 'CELL';
        $valor.id = 'valor' + ($total_linhas + 1);
        $valor.setAttribute('contenteditable','');
        document.querySelector('#COLUNA_VALOR').appendChild($valor);

        // adiciona o número de linhas existentes
        $total_linhas = parseInt($total_linhas) + 1;
        repetidor1++;

        $dados['linha' + $total_linhas] = {'data':'','modelo':'','valor':''};
        console.log('adicionadas: linha'+$total_linhas+', linhas atuais:',$dados)
    }
};

function deletarLinha()
{
    if ($total_linhas > 0)
    {
        document.querySelectorAll('li')[$total_linhas - 1].remove();
        document.querySelector('#COLUNA_DATA').querySelectorAll('div')[$total_linhas - 1].remove();
        document.querySelector('#COLUNA_MODELO').querySelectorAll('div')[$total_linhas - 1].remove();
        document.querySelector('#COLUNA_VALOR').querySelectorAll('div')[$total_linhas - 1].remove();

        $total_linhas = parseInt($total_linhas) - 1;

        delete $dados['linha' + ($total_linhas +1)];

        console.log('deletados: linha'+($total_linhas+1)+', linhas atuais:',$dados)
    }
};



// Guardando os valores presente na tag html no $dados.
function enviarDados(event)
{
    let celulaS = String(event.target.id);

    let counter = celulaS.slice(celulaS.length-1,celulaS.length+1);

        document.querySelector('#'+celulaS).addEventListener('input', function()
        {
            $dados['linha' + counter]['' + celulaS.slice(0, celulaS.length-1)] = this.textContent
        })
};


function soma()
{
};
