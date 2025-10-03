const form = document.getElementById("form-contato");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const questao = document.getElementById("questao").value;
  const contato = document.getElementById("contato-select").value;

  const assunto = encodeURIComponent(`Mensagem de ${nome}`);
  const corpo = encodeURIComponent(
    `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\nQuestão:\n${questao}`
  );

  alert(
    "Mensagem registrada com sucesso! O seu e-mail será aberto para concluir o envio."
  );

  window.location.href = `mailto:${contato}?subject=${assunto}&body=${corpo}`;

  form.reset();
});