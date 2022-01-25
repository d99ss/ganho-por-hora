function ganhoPorHora(salario, horasTrabalhadasNoMes) {
  const salarioHora = salario / horasTrabalhadasNoMes;
  const formatado = salarioHora.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return printMensagem(formatado);
}

function printMensagem(msg) {
  const h1 = document.getElementById("h1");
  h1.innerHTML = `Você ganha por hora ${msg}`;
}

function calculaJornadaMensal(jornadaSemanal) {
  const mediaTrabalhoSemanal = jornadaSemanal;
  const semanasNoMes = 5;
  const horasTrabalhadasNoMes = mediaTrabalhoSemanal * semanasNoMes;
  return horasTrabalhadasNoMes;
}

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
  salario.value = "";
  jornadaSemanal.value = "";
});

function checkInputs() {
  const jornadaSemanal = document.getElementById("jornadaSemanal").value;
  const salario = document.getElementById("salario").value;
  if (salario > 0 && jornadaSemanal > 0) {
    return ganhoPorHora(salario, calculaJornadaMensal(jornadaSemanal));
  } else if (salario === "" || jornadaSemanal === "") {
    alert("Campo vazio, insira um numero");
  } else {
    salario.value = "";
    alert("Insira um numero maior que zero");
  }
}
