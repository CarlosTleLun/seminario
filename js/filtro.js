$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let encuentro = $('#encuentro').offset().top,
        actividades = $('#actividades').offset().top,
        trabajos = $('#trabajos').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let encuentro = $('#encuentro').offset().top,
        actividades = $('#actividades').offset().top,
        trabajos = $('#trabajos').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-encuentro').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: encuentro -100
        },600);
    });

    $('#enlace-actividades').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: actividades -100
        },600);
    });

    $('#enlace-trabajos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajos -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});