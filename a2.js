(function(){
function clicando(msg){
    console.log('ola '+msg);
}
    let botao = document.getElementById('botao');
    botao.addEventListener('click', function() {clicando(' vc clicou')});

    })();