// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

const botaoAtualizar = document.getElementById(
  "atualizar-saldo"
) as HTMLButtonElement;
const botaoLimpar = document.getElementById(
  "limpar-saldo"
) as HTMLButtonElement;
const soma = document.getElementById("soma") as HTMLInputElement;
const campoSaldo = document.getElementById("campo-saldo") as HTMLSpanElement;

let saldoTotal: number;

function limparCampoSoma() {
  if (!soma) return;
  soma.value = "";
}

function somarAoSaldo(soma: number) {
  if (!campoSaldo) return;

  saldoTotal += soma;
  campoSaldo.innerHTML = saldoTotal.toString();
}

function limparSaldo() {
  if (!campoSaldo) return;

  saldoTotal = 0;
  campoSaldo.innerHTML = saldoTotal.toString();
}

limparSaldo();

botaoAtualizar?.addEventListener("click", function () {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener("click", function () {
  limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
