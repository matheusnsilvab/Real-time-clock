// Seleciona os elementos do HTML pelos IDs para podermos manipular o texto deles
const container = document.getElementById("clock-container");
const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");

// Função principal que atualiza as informações na tela
function update() {
  const now = new Date(); // Pega a data e hora atual do sistema

  // Formata apenas a hora (00:00:00) e insere no elemento do relógio
  clockElement.textContent = now.toLocaleTimeString("pt-BR", { hour12: false });

  // Pega o dia da semana por extenso (ex: segunda-feira)
  const diaSemana = now.toLocaleDateString("pt-BR", { weekday: "long" });

  // Pega a data numérica formatada em dia/mês/ano (ano com 2 dígitos)
  const dataNumerica = now.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  // Une o dia da semana com a data e coloca no elemento de data
  dateElement.textContent = `${diaSemana}, ${dataNumerica}`;
}

// Ouve o clique no container principal para alternar a tela cheia
container.addEventListener("click", () => {
  // TRAVA DE SEGURANÇA: Só executa se a tela for maior que 768px (Notebook/PC)
  if (window.innerWidth > 768) {
    // Se NÃO estiver em tela cheia, tenta ativar
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        // Exibe um alerta caso o navegador bloqueie a tela cheia
        alert("Erro ao entrar em tela cheia: " + err.message);
      });
    }
    // Se já estiver em tela cheia, ele sai ao clicar
    else {
      document.exitFullscreen();
    }
  }
});

// Define que a função 'update' deve rodar a cada 1000 milissegundos (1 segundo)
setInterval(update, 1000);

// Chama a função uma vez assim que a página carrega para não esperar o primeiro segundo
update();
