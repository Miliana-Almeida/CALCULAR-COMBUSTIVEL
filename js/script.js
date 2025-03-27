function calcular() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let consumo = parseFloat(document.getElementById("consumo").value);

    let litros = distancia / consumo;
    let custo = litros * 5.60;

    document.getElementById("resultado-container").style.display="block";
    document.getElementById("calculo").innerText = `Você precisará de ${litros}litros para a viagem
    O custo da viagem será de R$ ${custo} (considerando o preço do litro da gasolina R$ 5,60 )`;
}