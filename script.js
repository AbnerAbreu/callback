// function abrirAlert(nome){
//     alert(nome);
// }

// function receberNome(callbackNome){
//     let nome = "Abner"
//     callbackNome(nome);
// }
// receberNome(abrirAlert);

let lista = document.querySelector("ol");
let corpo = document.querySelector("body");


let raizes = [
    {nome:"batata"},
    {nome:"mandioca"},
    {nome:"rabanete"},
];

let imprimirComidas = (cor) =>{
    for(let raiz of raizes){
        lista.innerHTML +=`<li>${raiz.nome}</li>`
        corpo.style.backgroundColor = cor;

    }
}
let adicionarComidas = (cor) =>{
    let escolherCor = prompt("escolha uma cor em ingles");
    setTimeout(() => {
        raizes.push({nome: "gengibre"});
        cor(escolherCor);
    }, 2000);
}
adicionarComidas(imprimirComidas)