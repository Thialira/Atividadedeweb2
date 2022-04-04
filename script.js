function res() {
  const mini = parseInt(document.getElementById("nume1").value);
  const maxi = parseInt(document.getElementById("nume2").value);
  document.getElementById("qtnume").focus();
  const tabela = document.getElementById("tabela");
  const qtnume = document.getElementById("qtnume").value;
  const qtcolunas = document.getElementById("qtcolunas").value;
  tabela.innerHTML = "";
  for (let i = 1; i < qtnume; i++) {
    tabela.innerHTML += Math.trunc(Math.random() * (maxi - mini) + mini) + "\t";
    if (i % qtcolunas == 0) {
      tabela.innerHTML += "\n";
    }
  }
}

function limpar() {
  document.getElementById("qtnume").value = "";
  document.getElementById("qtcolunas").value = "";
  document.getElementById("nume1").value = "";
  document.getElementById("nume2").value = "";
  document.getElementById("resposta").value = "";
  const tabela = document.getElementById("tabela");
  tabela.remove();
  document.getElementById("qtnume").focus();
}
