function calcular(){
var CN = Number(document.getElementById("CN").value)
var CH = Number(document.getElementById('CH').value)
var M = Number(document.getElementById('M').value)
var L = Number(document.getElementById('L').value)
var R = Number(document.getElementById('R').value)
var res = document.getElementById('res')
var music = document.getElementById('music')

    if (CN === 0 || CH === 0 || M === 0 || L === 0 || R === 0){
        alert("Por favor preencha todos os dados")
}   else {
var nota = (CN + CH + M + L + R) / 5 
var nota_bonus = nota + nota*0.10
var nota_c = [720, 800]

    let item = document.createElement('p')
    res.innerHTML = ""
    if (nota_bonus > nota_c[0]){
        item.textContent = `Sua nota com bonus de 10% eh ${nota_bonus} e esta acima do minimo de ${nota_c[0]}.
        Sua nota original é: ${nota_bonus}.
        Felizmente voce obteve a nota suficiente para este curso`
}   else if (nota_bonus < nota_c[0]){
        item.textContent = `Sua nota com bonus de 10% eh ${nota_bonus} e esta abaixo do minimo de ${nota_c}.
        Sua nota original é: ${nota_bonus}.
        InFelizmente voce nao obteve a nota suficiente para este curso`
}   return res.appendChild(item) 
}}