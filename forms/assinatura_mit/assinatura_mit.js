(function(){
    var ativ = $("#atividade").val();
	var atualUser = $("#usuarioAtual").val();

    //Ocultar div
    $(".div_finalizar").hide();

    //Solicitante e Reavaliação de MIT
    if(ativ == 0 || ativ == 5 || ativ == 11){
        if (!$('#collapseSol').hasClass('in')) {
			$('#collapseSol').collapse('show');
		}

        if(ativ == 11){
            $(".div_finalizar").show();
        }
        scrollForm("#solicitante");
    }

    //Client
    if(ativ == 6){
        if (!$('#collapseClente').hasClass('in')) {
			$('#collapseClente').collapse('show');
		}

        scrollForm("#cliente");
    }

    /*
	 * Mantem o colapse aberto se estiver preenchido: Analise de datas
	 * CLiente
	 */
	if ($.trim($('.clie_txt_nome').val()) != "" || $.trim($('.clie_txt_nome').text()) != ""){
        if (!$('#collapseClente').hasClass('in')) {
            $('#collapseClente').collapse('show');
        }
    }

})()

// Funcao scroll
function scrollForm(target) {
    $target = $(target);
    var x = setTimeout(function() {
        $('html, body').animate({
            scrollTop : $target.offset().top
        }, 1500), 'swing', function() {
            window.location.hash = target;
        };
    }, 600);
}
