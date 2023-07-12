interface Humano {
    nome: string
    idade?: number
    [prop: string]: any //Propriedade com nome e valor dinâmicos
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá '+ pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({ nome: 'Jonas', idade: 27, xyz: true, altura: 1.75 })