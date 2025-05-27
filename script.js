const key = "65730819445f198abf50bdd1f1d45f24" ;

function editarDadosNaTela(dados) {
    document.querySelector(".text-cidade").innerHTML =  dados.name;
    document.querySelector(".temperatura").innerHTML = "Agora " + Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".text-nublado").innerHTML = dados.weather[0].description;
    document.querySelector(".text-umidade").innerHTML = "Umidade " +dados.main.humidity  + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp-min-max").innerHTML = `Min: ${Math.floor(dados.main.temp_min)}ºC | Max: ${Math.floor(dados.main.temp_max)}ºC`;

}

async function buscarCidade(inputCidade) {
try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${key}&lang=pt_br&units=metric`);
    const dados = await response.json();

    if (response.ok){
        editarDadosNaTela(dados);
    }else {
        alert("Cidade não encontrada. Tente novamente")
    }
} catch (error) {
    alert("Erro ao buscar dados . Verifique sua conexão");
}
    
    
}

function clicouNoPesquisar() {
    const inputCidade = document.querySelector(".input-cidade")
    const cidade = inputCidade.value;

    buscarCidade(cidade);
    inputCidade.value = ""
}


//Permitir busca ao apertar "Enter":
document.querySelector(".input-cidade").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        clicouNoPesquisar();
    }
});
