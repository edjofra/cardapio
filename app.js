import { produtos,categorias } from "./dados.js"
import modificador from "./modificador.js"

modificador.moedaReal(produtos,'preco')



function criarCardCategoria(item){
    
    var listaMenu = document.getElementById('lista-menu')
    listaMenu.innerHTML += `<a href="#" class="item">${item.nome}</a> `

}
function mostrarCategoriasMenu(){
    for(let index in categorias){
        var categoria = categorias[index]
        criarCardCategoria(categoria)
    }
}

function cardProdutosPromocao (prato) {

    var promocao = document.querySelector('#lista-promocoes')
    
    promocao.innerHTML+=`
    <div class="card-promocoes">
        <img src="imagens/${prato.imagem}" alt="${prato.nome}" class="img-promocoes">
        <p class="texto-promocoes">${prato.nome}</p>
        
        <p class="preco-promocoes">${prato.preco}</p>
    </div>
    `
}
function listandoTodosProdutosPromocao (){
    for (let key in produtos){
    var produto = produtos[key]
        if(produto.promocao == true ){
    cardProdutosPromocao (produto)
        }
    }  
}

function itemsPorCategoria(){
    var lista = document.querySelector('.lista')
        for(let key in categorias){

            var grupo = categorias[key] 

            lista.innerHTML+=`<h2> ${grupo.nome} </h2>`

            function cardsRetangulos (cards){
                lista.innerHTML+=`<li class="card-retangulo">
                                      <img src="imagens/${cards.imagem}" alt="${cards.nome}" class="img-retangulo">
              
                                      <div class="info">
                                          <h3>${cards.nome}</h3>
                                          <p class="descricao">${cards.descricao}</p>
                                          <p class="price">${cards.preco}</p>
                                          </div>
                                </li>`
                                    
            } 
            function ListarTudo(){
                for(let key in produtos){
                var produto = produtos[key]
                if(produto.categoria == grupo.codigo ){
                cardsRetangulos(produto)
                }
                }
            }
            ListarTudo()
        }   
    
}    

function init(){
    
    mostrarCategoriasMenu()
    listandoTodosProdutosPromocao()
    itemsPorCategoria()
    
}
init()
    
    







