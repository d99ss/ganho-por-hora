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
  salario.value = "";
}

function jornadaMensal() {
  const mediaTrabalhoSemanal = 36;
  const semanasNoMes = 5;
  const horasTrabalhadasNoMes = mediaTrabalhoSemanal * semanasNoMes;
  return horasTrabalhadasNoMes;
}

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", (e) => {
  e.preventDefault();
  const salario = document.getElementById("salario").value;
  if (salario > 0) {
    function getValue() {
      return ganhoPorHora(salario, jornadaMensal());
    }
    return getValue();
  } else if (salario === "") {
    alert("Campo vazio, insira um numero");
  } else {
    alert("Insira um numero maior que zero");
  }
});

jornadaMensal();
