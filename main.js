$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`<div class="overlay-image-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title = "Ver iagem em tamanho real">Ver a imagem em tamanho real</a>
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $('#endereco-imagem-nova').val('');
            $(novoItem).fadeIn(1000);
    })

})