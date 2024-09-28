$(document).ready(function () {
  // Inicializa o carrossel de imagens com Slick
  $("#carousel-imagens").slick({
    autoplay: true, // Ativa a reprodução automática
    arrows: false, // Desabilita as setas de navegação
    speed: 300, // Velocidade da transição
    slidesToShow: 1, // Número de slides a mostrar
    adaptiveHeight: true, // Ajusta a altura do carrossel automaticamente
  });

  var flag = false; // Flag para controle de clique na menu hamburguer

  // Evento de clique na menu hamburguer
  $(".menu-hamburguer").on("click touchstart", function (e) {
    e.preventDefault(); // Evita o comportamento padrão
    if (!flag) { // Verifica se a flag está desativada
      flag = true; // Ativa a flag
      $("nav").slideToggle(); // Alterna a exibição do menu
      setTimeout(function () {
        flag = false; // Reativa a flag após um curto período
      }, 100);
    }
    return false;
  });

  // Evento de clique nos links da navegação
  $(".container-nav li a").on("click touchstart", function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link

    // Pega o valor do atributo href do link clicado (o destino)
    var destino = $($(this).attr("href"));

    // Verifica se o destino existe na página
    if (destino.length) {
      var alturaDoCabecalho = $("header").outerHeight(); // Altura do cabeçalho
      $("html, body").animate(
        {
          scrollTop: destino.offset().top - alturaDoCabecalho, // Animação para rolar até o destino
        },
        1000 // Duração da animação em milissegundos
      );
    }
  });

  const contadorFavoritos = $(".contador-favoritos"); // Seleciona o contador de favoritos

  // Evento de clique na imagem do coração não preenchido
  $(".img-coracao").on("click touchstart", function (e) {
    e.preventDefault(); // Evita o comportamento padrão
    $(this).css("display", "none"); // Oculta o coração não preenchido
    $(this).next(".img-coracaoVermelho").css("display", "block"); // Mostra o coração preenchido
    contadorFavoritos.text(parseInt(contadorFavoritos.text()) + 1); // Incrementa o contador de favoritos
  });

  // Evento de clique na imagem do coração preenchido
  $(".img-coracaoVermelho").on("click touchstart", function (e) {
    e.preventDefault(); // Evita o comportamento padrão
    $(this).css("display", "none"); // Oculta o coração preenchido
    $(this).prev(".img-coracao").css("display", "block"); // Mostra o coração não preenchido
    let valorAtual = parseInt(contadorFavoritos.text());
    contadorFavoritos.text(valorAtual > 0 ? valorAtual - 1 : 0); // Decrementa o contador de favoritos
  });

  // Evento de clique no botão de carinho
  $(".button-carinho").on("click touchstart", function (event) {
    event.preventDefault(); // Evita o comportamento padrão
    const contadorCarinho = $(".contador-carinho"); // Seleciona o contador de carinho
    contadorCarinho.text(parseInt(contadorCarinho.text()) + 1); // Incrementa o contador de carinho
  });

  // Evento de toque no botão de carinho (para animação)
  $(".button-carinho").on("touchstart", function () {
    $(this)
      .css("background-color", "deeppink") // Muda a cor antes da animação
      .animate(
        {
          maxWidth: "100%", // Aumenta a largura do botão
          height: "+=10px", // Aumenta a altura do botão
          marginLeft: "0", // Remove a margem à esquerda
        },
        400 // Duração da animação (400ms)
      );
  });

  // Evento de toque no botão de carinho (ao soltar o toque)
  $(".button-carinho").on("touchend", function () {
    $(this)
      .animate(
        {
          maxWidth: "80%", // Retorna ao tamanho original
          height: "-=10px", // Retorna à altura original
          marginLeft: "10%", // Adiciona margem à esquerda
        },
        200 // Duração da animação (200ms)
      )
      .css("background-color", "hotpink"); // Muda a cor depois da animação
  });

  // Máscara para o campo de telefone
  $("#telefone").mask("(00)  00000-0000", {
    placeholder: "(__) _____-____", // Placeholder do telefone
  });

  // Validação do formulário
  $("form").validate({
    rules: {
      nome: {
        required: true, // Nome é obrigatório
      },
      email: {
        required: true, // Email é obrigatório
        email: true, // Verifica se o email é válido
      },
      telefone: {
        required: true, // Telefone é obrigatório
      },
      mensagem: {
        required: true, // Mensagem é obrigatória
      },
      veiculoDeInteresse: {
        required: false, // Veículo de interesse não é obrigatório
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome", // Mensagem de erro para nome
      email: "Por favor, insira o seu email", // Mensagem de erro para email
      telefone: "Por favor, insira o seu telefone", // Mensagem de erro para telefone
      mensagem: "Por favor, insira o motivo do contato", // Mensagem de erro para mensagem
    },

    // Função de callback ao enviar o formulário
    submitHandler: function (form) {
      console.log(form); // Exibe o formulário no console
      form.reset(); // Reseta o formulário
    },
  });
});
