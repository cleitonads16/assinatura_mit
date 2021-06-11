function displayFields(form, customHTML) {
	setEnabled(form, false);

	function setEnabled(form, lEnable) {
		var hpForm = new java.util.HashMap();

		hpForm = form.getCardData();

		var it = hpForm.keySet().iterator();

		while (it.hasNext()) {
			var key = it.next();
			form.setEnabled(key, lEnable);
		}
	}

	var modo = form.getFormMode();
	if (modo == "ADD" || modo == "MOD") {
		var numAtividade = getValue("WKNumState");
	} else {
		var numAtividade = null;
	}

	// Captura data atual
	var dataTemp = new Date();
	var date = dataTemp.getDate().toString();
	var mes = (dataTemp.getMonth() + 1).toString();
	var hora = dataTemp.getHours().toString() + ":"
			+ dataTemp.getMinutes().toString();
	if (date.length == 1) {
		date = 0 + date;
	}
	if (mes.length == 1) {
		mes = 0 + mes;
	}
	var dataAtual = date + "/" + mes + "/" + dataTemp.getFullYear();

	// Captura Nome do usuario
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
	var constraints = new Array(c1);
	var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);
	var userAtual = getValue("WKUser");

	if (numAtividade == 0 || numAtividade == 5 || numAtividade == 11) {// Solicitante
		// Nome do usuario
		form.setValue('sol_txt_nome', colaborador.getValue(0, "colleagueName"));
		// Data atual
		form.setValue('sol_txt_dt', dataAtual);
		// Habilitados
		form.setEnabled("zoom_nomeCliente", true);
		form.setEnabled("zoom_codPojeto", true);
		form.setEnabled("sol_txt_nomeProjeto", true);
		form.setEnabled("sol_txt_nomeCoorde", true);
		form.setEnabled("sol_rd_tipoProj", true);
		form.setEnabled("sol_txtArea_obs", true);
		form.setEnabled("sol_txt_emailAss", true);
		form.setEnabled("sol_chk_mit", true);
		form.setEnabled("sol_rd_finalProces", true);
		form.setEnabled("sol_txtArea_obs", true);

	} else if (numAtividade == 6) {// Cliente
		// Nome do usuario
		form.setValue('clie_txt_nome', colaborador.getValue(0, "colleagueName"));
		// Data atual
		form.setValue('clie_txt_dt', dataAtual);
		// Habilitados
		form.setEnabled("clie_rd_aprov", true);
		form.setEnabled("clie_txtArea_obs", true);
		
	}

	form.setValue("atividade", numAtividade);
	form.setValue("loginUsuario", userAtual);

}