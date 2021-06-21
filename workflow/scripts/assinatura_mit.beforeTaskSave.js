function beforeTaskSave(colleagueId,nextSequenceId,userList){

    var numAtividade = getValue("WKNumState");
	// var numProcesso = getValue("WKNumProces");

    if(numAtividade == 0 || numAtividade == 5 || numAtividade == 11){
        // Informações de anexo
		var docs = hAPI.listAttachments();
        // Quantidade de anexos
		var total_anexos = docs.size();
		
		if(total_anexos == 0){
			throw ("<b>Favor anexar a MIT referente ao processo. Entre na aba Anexo e clique no botão (Carregar Arquivos).</b>");
		}

		log.info("#### Gravar anexos do formulário na pasta");
        var id_FolderProtocolo = (parseInt("724")); //ID da pasta onde quero gravar os anexos
        //******************************GRAVAR ANEXOS NA PASTA CRIADA******************************//
        //PEGA ANEXOS DO FOMRULÁRIO
        var calendar = java.util.Calendar.getInstance().getTime();
        var docs = hAPI.listAttachments(); //Pega os anexos do processo
		try{
			for(var i=0;i<docs.size();i++){

                var doc = docs.get(i);                              
                doc.setParentDocumentId(id_FolderProtocolo);
				doc.setVersionDescription("Processo: " + getValue("WKNumProces"));           
                doc.setExpires(false);
                doc.setCreateDate(calendar);
                doc.setInheritSecurity(true);
                doc.setTopicId(1);
                doc.setUserNotify(false);
                doc.setValidationStartDate(calendar);
                doc.setVersionOption("0");
                doc.setUpdateIsoProperties(true);
                // GRAVA DOCUMENTO NO ECM
                hAPI.publishWorkflowAttachment(doc);
                log.info("#### Gravou anexo "+ doc.getDocumentId() + " do formulário na pasta Solicitação Nº  " + getValue("WKNumProces"));               
        }
        // FIM ANEXAR DOCUMENTOS
        // ******************************************************************************************//
		}catch(e){
			log.error("FALHA AO SALVAR DOCUMENTO \n" + e);
		}
        
    }
		
}


