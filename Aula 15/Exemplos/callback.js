function executarDepoisDe2s(callback) {
    setTimeout(() => {
        callback('Callback executado após 2s')
    }
, 2000);
  }
  
  function imprimeMensagem(mensagem) {
    console.log(mensagem);
  }
  
  executarDepoisDe2s(imprimeMensagem);
  
  executarDepoisDe2s((mensagem) => {
    console.log(mensagem);
  });