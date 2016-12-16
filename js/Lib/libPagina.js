lib.ajax({
  url:"https://ceep.herokuapp.com/cartoes/instrucoes",
  method: 'GET',
  success: function(resp){
    var a = resp;
  }
})
