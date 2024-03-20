import { produtos,categorias } from "./dados.js"
import modificador from "./modificador.js"



function init(){
    modificador.formatarMoedaReal(produtos,'preco')
    mostrarCategoriasMenu()
    listarProdutosPromocao()
    listarTodosItemsPorCategoria()
    
}
init()



function mostrarCategoriasMenu(){
    function criarCardCategoria(item){
    
        var listaMenu = document.getElementById('lista-menu')
        listaMenu.innerHTML += `<a href="#${item.nome}" class="item">${item.nome}</a> `
    
    }

    for(let index in categorias){
        var categoria = categorias[index]
        criarCardCategoria(categoria)
    }

}

function listarProdutosPromocao (){

    function criarCardProdutosPromocao (prato) {

        var promocao = document.querySelector('#lista-promocoes')
        
        promocao.innerHTML+=`
        <div class="card-promocoes">
            <img src="imagens/${prato.imagem}" alt="${prato.nome}" class="img-promocoes">
            <p class="texto-promocoes">${prato.nome}</p>
            
            <p class="preco-promocoes">${prato.preco}</p>
        </div>
        `
    }
    
    for (let key in produtos){
    var produto = produtos[key]
        if(produto.promocao == true ){
    criarCardProdutosPromocao (produto)
        }
    }  
}

function listarTodosItemsPorCategoria(){
   
    for(let key in categorias){

        var grupo = categorias[key] 
        var lista = document.querySelector('.lista')
        lista.innerHTML+=`<h2 id="${grupo.nome}"> ${grupo.nome} </h2>`

        function criarCardsRetangulos (cards){
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
                criarCardsRetangulos(produto)
                }
                }
        }
        ListarTudo()
        
    }   
    
}    

    

