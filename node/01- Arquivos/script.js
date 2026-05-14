const fs = require('fs')

fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco de notas com node.js"
)

console.log("Arquivo  criado com sucesso !")




//Crie um bloco de notas com seu nome, turma, curso e filme favorito



fs.writeFileSync(
    "atv.txt",
    "Danilo brant, TDS2 , filme: Carros"
)


const pessoa = {
    nome : "Danilo",
    idade : 17,
    cidade: "Itaquaquecetuba"
}


fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("Json criado com sucesso")




//Crie um arquivo JSOM chamado "Informações com seu nome , idade,telefone e email"


const texto ={
    nome : "Danilo",
    idade : 17,
    cidade: "Itaquaquecetuba",
    telefone : 11912090611,
    email : "danilobran@getMaxListeners.com"
}

fs.writeFileSync(
    "informacoes.json",
    JSON.stringify(texto, null, 2)
)



//Importar partes especificas da biblioteca word


const{
    Document, //Criar o word
    Packer,  //Transformar o documento em word
    Paragraph,// Cria paragrafos
    TextRun //Adicionar textos
} = require ("docx")
// Criando um documento no word

const doc = new Document({
    //páginas -> seção -> paragrafo ->texto
    sections :[
        {
            properties: {},
            // filhos da seção - funciona como o body
            // textos , tabelas , imagem etc.
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Arquivo Word")
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})  


Packer.toBuffer(doc)
    .then((buffer) => {
        fs.writeFileSync(
            "relatorio.docx",
            buffer
        )
        console.log("O word foi criado")
    })
    .catch((error) => {
        console.error("Erro ao criar o arquivo Word:", error)
    })