(function(){
  "use strict"
// $("#ajuda").click(function(){
//   $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
//           function(res){
//             console.log(res);
//
//             res.instrucoes.forEach(function(instrucao){
//               adicionaCartao(instrucao.conteudo,instrucao.cor)
//             })
//       })
// })
lib.ajax({
  url:"https://ceep.herokuapp.com/cartoes/instrucoes",
  method: 'GET'
})
}())
