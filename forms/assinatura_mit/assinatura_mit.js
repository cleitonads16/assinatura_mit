(function(){
    var ativ = $("#atividade").val();
	var atualUser = $("#usuarioAtual").val();

    $('.cpf').mask('000.000.000-00', {
        reverse: true
    });

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

    // valida CPF
    $(".cpf").blur(function () {
        if ($(this).val().length > 0) {
            var c = this.value;
            var i;
            var primeiro_ponto = c.replace('.', '');
            var segundo_ponto = primeiro_ponto.replace('.', '');
            var cpf_sem_mascara = segundo_ponto.replace('-', '');
            s = cpf_sem_mascara;
            var c = s.substr(0, 9);
            var dv = s.substr(9, 2);
            var d1 = 0;
            var v = false;

            for (i = 0; i < 9; i++) {
                d1 += c.charAt(i) * (10 - i);
            }
            if (d1 == 0) {
                FLUIGC.message.alert({
                    message: 'CPF incorreto!',
                    title: 'ALERTA!',
                    label: 'OK'
                });
                v = true;
                return false;
            }
            d1 = 11 - (d1 % 11);
            if (d1 > 9)
                d1 = 0;
            if (dv.charAt(0) != d1) {
                FLUIGC.message.alert({
                    message: 'CPF incorreto!',
                    title: 'ALERTA!',
                    label: 'OK'
                });
                $(this).val("");
                v = true;
                return false;
            }

            d1 *= 2;
            for (i = 0; i < 9; i++) {
                d1 += c.charAt(i) * (11 - i);
            }
            d1 = 11 - (d1 % 11);
            if (d1 > 9)
                d1 = 0;
            if (dv.charAt(1) != d1) {
                FLUIGC.message.alert({
                    message: 'CPF incorreto!',
                    title: 'ALERTA!',
                    label: 'OK'
                });
                $(this).val("");

                v = true;
                return false;
            }
            if (!v) {
            }
        }
    });

    //Validar Email
    $('.email').blur(function () {
        var email = $("#sol_txt_emailAss").val();
        if ($(this).val().length > 0) {
            er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
            if (er.exec(this.value))
                return true;
            else {
                FLUIGC.message.alert({
                    message:'O Email: '+ email + " n\u00E3o \u00E9 v\u00E1lido",
                    title: 'ALERTA!',
                    label: 'OK'
                });
            }
        }
    });

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

function setSelectedZoomItem(selectedItem) {

	var atividade = $("#atividade").val();
   
	if (atividade == 0 || atividade == 5 || atividade == 11){
        if(selectedItem.cdProjeto){
			var nomeProjeto = selectedItem.descProjeto;
			$("#sol_txt_nomeProjeto").val(nomeProjeto);
        }
		
	}
	 
}
