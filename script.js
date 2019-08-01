function abrirAlert(nome){
    alert(nome);
}

function receberNome(callbackNome){
    let nome = "Abner"
    callbackNome(nome);
}
receberNome(abrirAlert);