function continuar() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Quando os espiritos te enviam para a missão, você é enviado do céu e acorda em uma ilha. deseja explorar a ilha ou seguir o caminho até o templo da luz? </h3>';
  formation += ' <img src="r/sky.gi">';
  formation += '<br>';
  formation += '<button onclick="Escolha1()"> Explorar a ilha</button>';
  formation += '<button onclick="Escolha2()">Seguir o caminho até o templo da luz</button>';
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Por acaso, você encontro um espírito petrificado. irá acender a vela do espírito petrificado e salva-lo para continuar a procurar espíritos por perto ou ignorar e prosseguir até o templo da luz? </h3>';
  formation += ' <img>';
  formation += '<br>';
  formation += '<button onclick="Escolha11()">Ignorar e seguir até o templo da luz</button>';
  formation += '<button onclick="Escolha12()">Salvar o espírito</button>';
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você procura por sobrevivente e encontra Max, o gordinho da tecnologia, que na qual está fugindo dos zumbis. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha111()">Salvar Max</button>';
  formation += '<button onclick="Escolha112()">Ignorar</button>';
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você é um vacilão, não é? Salve o gordinho logo.';
  formation += '<br>';
  formation += '<button onclick="Escolha111()">Salvar Max</button>';
  $(".principal").append(formation);
}

function Escolha111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você derrotou os zumbis e chamou Max para seu grupo, logo após vocês saíram do laboratório. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha1111()">Procurar um meio de Transporte</button>';
  formation += '<button onclick="Escolha1112()">Ir a pé</button>';
  $(".principal").append(formation);
}

function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> No meio do caminho você encontra Jasmim, que está em cima de uma casa. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha11111()">Salvar Jasmin</button>';
  formation += '<button onclick="Escolha11112()">Ignorar</button>';
  $(".principal").append(formation);
}

function Escolha11112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Jasmin se distrai, tropeça e morre. </h3>'
  formation += '<button onclick="Escolha11111()">Continuar</button>';
  $(".principal").append(formation);
}

var formation = ''
function Escolha11111() {
  formation += '<br>';
  formation += '<h3> Logo após você e seu grupo pensam em um plano para criar uma cura para o vírus. No caminho, vocês acham uma horda de zumbis. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha111111()">Lutar</button>';
  formation += '<button onclick="Escolha111112()">Desviar do Caminho</button>';
  $(".principal").append(formation);
}
var formation = ''
function Escolha111112() {
  formation += '<br>';
  formation += '<h3> Vocês tem uma viagem longa, porém sem nenhuma interrupção e enfim conseguem chegar ao laboratório e por fim você conseguiu salvar o mundo de um apocalipse zumbi. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês conseguem derrotar eles e ir para o laboratório, porém perde uma vida. No laboratório, vocês encontram um pequeno grupo de zumbis que restaram. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha1111111()">Lutar</button>';
  formation += '<button onclick="Escolha1111112()">Tentar ir sem chamar atenção</button>';
  $(".principal").append(formation);
}

function Escolha1111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês conseguem derrotar os zumbis e criam a cura do vírus. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Enquanto procurava por outros espíritos você acaba se esbarrando com um espirito sombrio.  </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha121()">Lutar com o espírito</button>';
  formation += '<button onclick="Escolha122()">Tentar correr e fugir do espírito </button>';
  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> O espirito era muito forte, te derrotou e voce morreu. volte e escolha outra opção!</h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você consegue fugir para uma floresta e lá você encontra um ancião, que te oferece uma estrela em troca de uma missão. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha77()">Aceitar missão</button>';
  formation += '<button onclick=Escolha78()>Recusar missão</button>';
  $(".principal").append(formation);
}

function Escolha771() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> A caminho da missão, você avista um templo abandonado. decide entrar e se depara com uma estrela.</h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha777()">Pegar estrela</button>';
  formation += '<button onclick="Escolha778()">Ignorar e sair do templo</button>';
  $(".principal").append(formation);
}

function Escolha7711() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Quando você esta indo pegar a estrela que estava do utro lado do corredor, o chão desaba e você acaba caindo e ficando preso no buraco. por sorte nesse buraco tem alguns cipós pendurados que podem te ajudar a subir. Mas também tem um pequeno túnel escuro que talvez, pode levar a uma saída. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha7711()">Arriscar e subir pelos cipós</button>';
  formation += '<button onclick="Escolha7712()">Entrar no túnel</button>';
  $(".principal").append(formation);
}

function Escolha77112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> No túnel havia um espirito de um dragão adormecido. </h3>'
  formation += '<br>'
  formation += '<button onclick="Escolha77111()">Voltar atrás</button>';
  formation += '<button onclick="Escolha77112()">tentar passar despercebido pelo dragão</button>';
  formation += '<br>'
  $(".principal").append(formation);
}
function Escolha77112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você consegue passar despercebido pelo dragão e chega ao templo. </h3>'
  formation += '<br>'
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> A caminho do templo, você avista uma torre abandonada e escura que está em ruinas. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha21()">Entrar na torre</button>';
  formation += '<button onclick="Escolha22()">Ignorar e seguir</button>';
  $(".principal").append(formation);
}

function Escolha21() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Lá dentro tinha um espírito, você consegue correr, porém, uma grande pedra te acerta e você e acaba morrendo. Volte e escolha outra opção. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  formation += '<button onclick="Escolha211()">ficar</button>';
  formation += '<button onclick="Escolha1()">Fugir</button>';
  $(".principal").append(formation);
}


function Escolha211() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Lá dentro tinha um espírito, você consegue correr porém, uma grande pedra te acerta e você e acaba morrendo. Volte e escolha outra opção. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  $(".principal").append(formation);
}















