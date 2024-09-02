let proximoId = 1;
const cliente = require("../controllers/cliente.js");

module.exports = (body, id=proximoId) => {
    if(body.servicos != undefined &&
       body.servicos.length > 0 &&
       cliente.show(body.idCliente) &&
       body.horarioInicio != undefined &&
       body.horarioInicio != "" &&
       body.horarioFim != undefined &&
       body.horarioFim != "" &&
       !isNaN(body.preco) &&
       body.preco >= 0 &&
       body.statusPagamento != undefined &&
       body.statusPagamento != "" 
    ){
        return {
            id: id,
            servicos: body.servicos,
            horarioInicio: body.horarioInicio,
            horarioFim: body.horarioFim,
            preco: body.preco,
            statusPagamento: body.statusPagamento
        }
    }
}