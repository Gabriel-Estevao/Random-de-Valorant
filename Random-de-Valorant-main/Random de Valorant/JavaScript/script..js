const imagens = [
  "imagens/Astra.webp",
  "imagens/Breach.webp",
  "imagens/Brimstone.webp",
  "imagens/Chamber.webp",
  "imagens/Clove.webp",
  "imagens/Cypher.webp",
  "imagens/Deadlock.webp",
  "imagens/Fade.webp",
  "imagens/Gekko.webp",
  "imagens/Harbor.webp",
  "imagens/iso.webp",
  "imagens/Jett.webp",
  "imagens/KAYO.webp",
  "imagens/Killjoy.webp",
  "imagens/Neon.webp",
  "imagens/Omen.webp",
  "imagens/Phoenix.webp",
  "imagens/Raze.webp",
  "imagens/Reyna.webp",
  "imagens/Sage.webp",
  "imagens/Skye.webp",
  "imagens/Sova.webp",
  "imagens/Tejo.webp",
  "imagens/Viper.webp",
  "imagens/VYSE.webp",
  "imagens/Waylay.webp",
  "imagens/Yoru.webp",
    // ... mais imagens com o mesmo padrão de nomeação
  ];

  const elementosImagem = document.querySelectorAll(".imagem-galeria");
  const botaoGerar = document.getElementById("botaoGerar");
  let imagensExibidas = [];
  
  function formatarNomeDoArquivo(caminho){
    const nome = caminho.split('/').pop().split('.')[0];
    const nomeLimpo = nome.replace(/[-_]/g, ' ');
    return nomeLimpo.charAt(0).toUpperCase() + nomeLimpo.slice(1);
  }

  function gerarImagensAleatorias() {
    imagensExibidas = []; // Limpa os índices exibidos anteriormente
    for (let i = 0; i < elementosImagem.length; i++) {
      let indiceAleatorio;
      do {
        indiceAleatorio = Math.floor(Math.random() * imagens.length);
      } while (imagensExibidas.includes(indiceAleatorio)); // Garante que a imagem não se repita

      imagensExibidas.push(indiceAleatorio);
      const caminho = imagens[indiceAleatorio];
      elementosImagem[i].src = caminho;
      const nomeAgente = formatarNomeDoArquivo(caminho);
      elementosImagem[i].alt = nomeAgente;
      elementosImagem[i].title = nomeAgente;
    }
  }

  botaoGerar.addEventListener("click", gerarImagensAleatorias);

  // Gera as primeiras imagens aleatórias ao carregar a página
  gerarImagensAleatorias();
