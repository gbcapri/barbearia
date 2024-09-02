/*Servico:
  - nome
  - preco
  - barbeiro_id
- duracao_minutos*/

const model = require("../models/barbeiro.js")

let nextId = 1

const model = (body, id = nextId++) => {

    const duracao = body.duracao
        .replaceAll(":", ".")
        .replaceAll(",", ".")
        .replaceAll("h", ".")
        .replaceAll("m", ".")
        .replaceAll("s", ".")
        .replaceAll(" ", "")
    let soNumerosTime = true

    duracao.split("").forEach(el => {
        if(isNaN(Number(el))) {
            soNumerosTime = false
        }
    })

    const preco = body.preco
        .replaceAll(",", ".")
        .replaceAll("R", "")
        .replaceAll("$", "")
        .replaceAll(" ", "")

    let soNumeros = true

    preco.split("").forEach(el => {
        if(isNaN(Number(el))) {
            soNumeros = false
        }
    })

    if (body.nome != undefined &&
        body.nome != "" &&
        preco != undefined &&
        preco != "" &&
        duracao != undefined &&
        duracao != "" &&
        soNumeros &&
        soNumerosTime
        ) {
        return {
            id,
            preco: preco,
            nome: body.nome,
            duracao: body.duracao,
            senha: body.senha,
            idBarbeiro: body.idBarbeiro
        }
    }
}

module.exports = model