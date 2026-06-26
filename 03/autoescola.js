let form = document.querySelector("#autoescola");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let idade = document.querySelector("#id_idade").value;

    let resultado = document.getElementById("id_result");

    if(idade >= 18 && idade <= 49){
        renovacao = "Apto para início. Sua renovação de habilitação acontecerá a cada 10 anos."
    }
    else if(idade >= 50 && idade <= 69){
        renovacao = "Apto para início. Sua renovação de habilitação acontecerá a cada 5 anos."
    }
    else if(idade >= 70 && idade <= 99){
        renovacao = "Apto para início. Sua renovação de habilitação acontecerá a cada 3 anos."
    }
    else{
        renovacao = "Inapto para início"
    }

    resultado.innerHTML +=
    `<p>${renovacao}</p><br/>`

});