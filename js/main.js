$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
    // dots: true,
    // infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $(".container-nav li a").click(function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link

    // Pega o valor do atributo href do link clicado (o destino)
    var destino = $($(this).attr("href"));

    // Verifica se o destino existe na página
    if (destino.length) {
      $("html, body").animate(
        {
          scrollTop: destino.offset().top,
        },
        1000 // tempo de animação em milissegundos
      );
    }
  });
});
