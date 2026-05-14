let perguntas = [
    {
        pergunta: "Qual marca tem como símbolo o 'Cavalo Empinado' (Cavallino Rampante)?",
        respostas: ["Lamborghini", " Ferrari ", "Porsche", " Maserati"],
        correta: 1 // =ferrai
    },
    {
        pergunta: " A Toyota, fabricante de modelos como o Corolla e a Hilux, é originária de qual país?",
        respostas: ["China", "Coreia do Sul", "Japão", "Alemanha"],
        correta: 2// = Japão
    },
    {
        pergunta: "O logótipo com quatro anéis entrelaçados pertence a que fabricante automóvel?",
        respostas: ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"],
        correta: 1 

    },
     {
        pergunta: "Qual é a principal especialidade da marca norte-americana Tesla?",
        respostas: ["Caminhões pesados a diesel", "Veículos 100% Elétricos", "Veículos híbridos (gasolina + elétrico)", "Veículos híbridos (gasolina + elétrico)"],
        correta: 1 

    },

    {
        pergunta: "A marca Gurgel, conhecida pelo modelo BR-800, teve a sua origem em que país?",
        respostas: ["Portugal", "Brasil", "Argentina", "México"],
        correta: 1 

    },


    {
        pergunta: "Qual marca alemã é famosa pelo logotipo da Estrela de Três Pontas?",
        respostas: ["Audi", "Porsche", "Opel", "Mercedes-Benz"],
        correta: 3

    },

    
    {
        pergunta: "Qual marca italiana tem um Touro como símbolo e dá aos seus carros nomes de touros famosos?",
        respostas: ["Ferrari", "Alfa Romeo", "Lamborghini", "Fiat"],
        correta: 2

    },

    
    {
        pergunta: "Qual marca francesa utiliza um Losango (chamado de Diamond) como seu logotipo?",
        respostas: ["Peugeot", "Bugatti", "Renault", "Citroën"],
        correta: 2

    },

{
        pergunta: "A marca Jeep é mundialmente famosa por ter criado qual tipo de veículo durante a 2ª Guerra Mundial?",
        respostas: ["Carros de luxo para generais", "Veículos utilitários 4x4 (fora de estrada) ", "Motocicletas com sidecar", "Tanques de guerra pesados"],
        correta: 1

    },

    {
        pergunta: "De qual país é a marca Hyundai, que produz modelos como o HB20 e o Tucson?",
        respostas: ["Japão", "Vietnã", "Tailândia", "Coreia do Sul"],
        correta: 3

    },









]

// Variáveis de controle
let perguntaAtual = 0
// Qual pergunta ta sendo exibida
// Começa na posição 0 //Primeira pergunta
let pontuacao = 0 //Quantas respostas certas

function mostrarPergunta(){
    let pergunta = perguntas[perguntaAtual]
    // Pega a pergunta atual dentro do array
    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")

    respostasDiv.innerHTML = ""
    // Limpa a div antes de adicionar novas respostas

    pergunta.respostas.forEach(function(resposta,index){
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>` 
    })
}
function verificarResposta(index){
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")

    if(index == pergunta.correta){
        resultado.innerText = "Acertou"
        pontuacao++
    }else{
        resultado.innerText = "Errou"
    }
}

function proximaPergunta(){
    perguntaAtual++
    // Vai para a próxima pergunta
    if(perguntaAtual < perguntas.length){
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    }else{
        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal(){
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Sua Pontuação foi: ${pontuacao}</p>
    <button onclick="location.reload()">Jogar Novamente</button>`
    // location.reload() = Recarrega a página
}

mostrarPergunta()