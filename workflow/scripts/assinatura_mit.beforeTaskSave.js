function beforeTaskSave(colleagueId,nextSequenceId,userList){

    var numAtividade = getValue("WKNumState");

    if(numAtividade == 0 || numAtividade == 5 || numAtividade == 11){
        // Informações de anexo
		var docs = hAPI.listAttachments();
        // Quantidade de anexos
		var total_anexos = docs.size();
		
		if(total_anexos == 0){
			throw ("<b>Favor anexar a MIT referente ao processo. Entre na aba Anexo e clique no botão (Carregar Arquivos).</b>");
		}
		
	}

	armazenaAnexos();
}

