// Obtendo os elementos HTML
var h = document.getElementById("h");
var vh = document.getElementById("vh");
var resultado = document.querySelector('#sb');
var resultadoLiquido = document.querySelector('#sl'); // Corrigido o nome da variável

function salarioB() {
    // Obtendo os valores dos inputs e convertendo para float
    var valorHora = parseFloat(h.value) || 0; // Usar .value para obter o valor do input
    var horasTrabalhadas = parseFloat(vh.value) || 0; // Usar .value para obter o valor do input
    
    // Calculando o salário bruto
    var salarioBruto = valorHora * horasTrabalhadas;
    
    // Atualizando o conteúdo do elemento HTML com o salário bruto
    resultado.innerHTML = salarioBruto.toFixed(2); // Arredondar com dois decimais
}

function salarioL() {
    // Obtendo o valor do salário bruto do elemento HTML
    var salarioBruto = parseFloat(resultado.textContent) || 0;
    
    // Calculando descontos
    var inss = salarioBruto * 0.08;
    var impostoRenda = salarioBruto * 0.11;
    var sindicato = salarioBruto * 0.05;
    
    // Calculando o salário líquido
    var salarioLiquido = salarioBruto - (inss + impostoRenda + sindicato);
    
    // Atualizando o conteúdo do elemento HTML com o salário líquido
    resultadoLiquido.innerHTML = salarioLiquido.toFixed(2); // Arredondar com dois decimais
}