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
  
  function gerarImagensAleatorias() {
      imagensExibidas = []; // Limpa as imagens exibidas anteriormente
      for (let i = 0; i < elementosImagem.length; i++) {
          let indiceAleatorio;
          do {
              indiceAleatorio = Math.floor(Math.random() * imagens.length);
          } while (imagensExibidas.includes(imagens[indiceAleatorio])); // Garante que a imagem não se repita
  
          imagensExibidas.push(imagens[indiceAleatorio]);
          elementosImagem[i].src = imagens[indiceAleatorio];
      }
  }
  
  botaoGerar.addEventListener("click", gerarImagensAleatorias);
  
  // Gera as primeiras 5 imagens aleatórias ao carregar a página
  gerarImagensAleatorias();
