
function formatarMoeda(categoria, attr){
    categoria.map(item => item[attr] = item[attr].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) )
    
 }

export default {moedaReal: formatarMoeda}