let produtos = [
    {
      codigo: 0,
      nome: 'Pizza Fogo Selvagem',
      descricao: 'Um hambúrguer picante com pimentões grelhados, queijo pepper jack derretido, cebolas caramelizadas e molho de pimenta chipotle, servido em um pão de jalapeño',
      preco: 29.9,
      quantidade: 0,
      categoria: 0,
      imagem: 'burger_fogo_selvagem.png',
      promocao: true,
      disponivel: true
    },
    {
      codigo: 1,
      nome: 'Burger Clássico Americana',
      descricao: 'Um hambúrguer de carne bovina suculenta com queijo cheddar derretido, alface crocante, tomate fresco, cebola roxa fatiada e um toque de molho especial, tudo em um pão de hambúrguer tradicional.',
      preco: 49.9,
      quantidade: 0,
      categoria: 0,
      imagem: 'burger_classico_americana.png',
      promocao: true,
      disponivel: true
    }
  ]

let familia = [
    {
      nome: 'Juju',
      idade: 38,
      trabalhando: false,
      hobbies: [ 'ler', 'malhar', 'programar' ],
      detalhes_ler: { horario: 16, quantidade: 28, estilo: 'todos' }
    },
    {
      nome: 'jojo',
      idade: 28,
      trabalhando: false,
      hobbies: [ 'ler', 'malhar', 'programar' ],
      detalhes_ler: { horario: 16, quantidade: 28, estilo: 'todos' }
    },
    {
      nome: 'Dede',
      idade: 58,
      trabalhando: false,
      hobbies: [ 'ler', 'malhar', 'programar' ],
      detalhes_ler: { horario: 16, quantidade: 28, estilo: 'todos' }
    },
    {
      nome: 'Nand',
      idade: 38,
      trabalhando: false,
      hobbies: [ 'ler', 'malhar', 'programar' ],
      detalhes_ler: { horario: 16, quantidade: 28, estilo: 'todos' }
    },
    {
      nome: 'tetis',
      idade: 78,
      trabalhando: false,
      hobbies: [ 'ler', 'malhar', 'programar' ],
      detalhes_ler: { horario: 16, quantidade: 28, estilo: 'todos' }
    },
    {
      nome: 'Ani',
      idade: 50,
      trabalhando: false,
      hobbies: [ 'ler', 'malhar', 'programar' ],
      detalhes_ler: { horario: 16, quantidade: 28, estilo: 'todos' }
    }
  ]

for (index in familia){
    var fam = familia[index]
console.log(`Esse é o ${fam.nome}, que tem ${fam.idade} anos`)
}
console.log(`Esse é o cardápio:`)
for (key in produtos){
    
    var produto = produtos[key]
    console.log(`${produto.nome} por ${produto.preco}`)
}

/*convertendo objs Js para JSON, colocando as aspas 
 var x = JSON.strinfify(objJS)

let agrJson = JSON.stringify(produtos)

*/

/* agr convertendo JSON para objs Js,

tirando aspas e virgulas 
var x = JSON.parse(objJso)
OU (+simples) simplesmente copia e cola do terminal Node.js*/




/*for (index in produtos){

    var produto = produtos[index]
    console.log(`${produto.nome} ${produto.preco}`)

}*/


