var lib = (function(){
    //Objeto jSon vazio
    var module = {};
    //Funcao do ajax com parametro
    module.ajax = function(json){
        var xhr = new XMLHttpRequest();

        var option = {
          url: json.url || function(){console.log("Informe a URL");},
          method: json.method || 'GET',
          success: json.success || function(){console.log("Informe a funcao success");},
          error: json.error
        }
        xhr.open(option.method,option.url)

        xhr.addEventListener('progress',function(){
          console.log("Ouvindo o progress");
        })
        xhr.addEventListener('load',function(){
          if(xhr.status.toString().match(/2[0-9]{2}/)){
            option.success;
          }
        })
        xhr.addEventListener('error',function(){
          console.log("Ouvindo o erro");
        })
        xhr.send();
    }
    return{
      ajax: module.ajax
    }
})();
