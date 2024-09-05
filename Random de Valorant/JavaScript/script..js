const imagens = [
    "imagem1-1.jpg",
    "imagem1-2.jpg",
    "imagem1-3.jpg",
    "imagem2-1.jpg",
    "imagem2-2.jpg",
    // ... mais imagens com o mesmo padrão de nomeação
  ];

  function filtrarImagens(nomeImagem) {
    return imagens.filter(imagem => imagem.includes(nomeImagem));
  }

  function gerarImagemAleatoria() {
    const imagensFiltradas = filtrarImagens(imagemAtualNome);
    if (imagensFiltradas.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * imagensFiltradas.length);
      return imagensFiltradas[indiceAleatorio];
    } else {
      // Nenhuma imagem com o mesmo nome encontrada, retorne uma imagem aleatória do array completo
      return imagens[Math.floor(Math.random() * imagens.length)];
    }
  }

  const imagemElement = document.getElementById("minhaImagem");

  setInterval(() => {
    const imagemAleatoriaURL = gerarImagemAleatoria();
    imagemElement.src = imagemAleatoriaURL;
  }, 5000);