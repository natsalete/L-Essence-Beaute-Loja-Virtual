$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  var flag = false;
  $(".menu-hamburguer").on("click touchstart", function (e) {
    e.preventDefault();
    if (!flag) {
      flag = true;
      $("nav").slideToggle();
      setTimeout(function () {
        flag = false;
      }, 100);
    }
    return false;
  });

  $(".container-nav li a").on("click touchstart", function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link

    // Pega o valor do atributo href do link clicado (o destino)
    var destino = $($(this).attr("href"));

    // Verifica se o destino existe na página
    if (destino.length) {
      var alturaDoCabecalho = $("header").outerHeight();
      $("html, body").animate(
        {
          scrollTop: destino.offset().top - alturaDoCabecalho,
        },
        1000
      );
    }
  });

  const contadorFavoritos = $(".contador-favoritos");

  $(".img-coracao").on("click touchstart", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    $(this).next(".img-coracaoVermelho").css("display", "block");
    contadorFavoritos.text(parseInt(contadorFavoritos.text()) + 1);
  });

  $(".img-coracaoVermelho").on("click touchstart", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    $(this).prev(".img-coracao").css("display", "block");
    let valorAtual = parseInt(contadorFavoritos.text());
    contadorFavoritos.text(valorAtual > 0 ? valorAtual - 1 : 0);
  });

  $(".button-carinho").on("click touchstart", function (event) {
    event.preventDefault();
    const contadorCarinho = $(".contador-carinho");
    contadorCarinho.text(parseInt(contadorCarinho.text()) + 1);
  });

  // $(".button-carinho").on("touchstart", function (event) {
  //   event.preventDefault();
  //   $(this).css("width", "120%");
  //   $(this).css("background-color", "deeppink");
  // });

  $(".button-carinho").on("touchstart", function () {
    $(this).animate(
      {
        width: "+=20px", // Aumenta a largura
        height: "+=10px", // Aumenta a altura
      },
      200
    ); // Duração da animação (200ms)
  });

  $(".button-carinho").on("touchend", function () {
    $(this).animate(
      {
        width: "-=20px", // Volta ao tamanho original
        height: "-=10px", // Volta ao tamanho original
      },
      200
    ); // Duração da animação (200ms)
  });

  $("#telefone").mask("(00)  00000-0000", {
    placeholder: "(__) _____-____",
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
      email: "Por favor, insira o seu email",
      telefone: "Por favor, insira o seu telefone",
      mensagem: "Por favor, insira o motivo do contato",
    },

    submitHandler: function (form) {
      console.log(form);
      form.reset();
    },
  });
});
