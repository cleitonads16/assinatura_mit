function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();    

    dataset.addColumn("num_solicitacao"); 
    dataset.addColumn("data"); 
    dataset.addColumn("anexo"); 


    //Cria a constraint para buscar os formulários ativos
    var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
    var constraints = new Array(cst);
     
    var datasetPrincipal = DatasetFactory.getDataset("DSassinatura_mit", null, constraints, null);
     
    for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
        var documentId = datasetPrincipal.getValue(i, "sol_txt_dt");
        var documentVersion = datasetPrincipal.getValue(i, "metadata#version");
         
        //Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
        // var c1 = DatasetFactory.createConstraint("tablename", "tabelaPecas" ,"tabelaPecas", ConstraintType.MUST);
        var c2 = DatasetFactory.createConstraint("sol_txt_dt", documentId, documentId, ConstraintType.MUST);
        var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
        var constraintsFilhos = new Array(c2,c3);
 
        //Busca o dataset
        var datasetFilhos = DatasetFactory.getDataset("workflowProcess", null, constraintsFilhos, null);
 
        for (var j = 0; j < datasetFilhos.rowsCount; j++) {
            //Adiciona os valores nas colunas respectivamente.
            dataset.addRow(new Array(
                    documentId,
                    datasetFilhos.getValue(j, "wdk_sequence_id"),
                    datasetFilhos.getValue(j, "workflowProcessPK.processInstanceId"), 
                    datasetFilhos.getValue(j, "processId")));
        }
    }





    /*var returnFields = new Array("workflowProcessPK.processInstanceId");
    
    // var returnFields3 = new Array("documentId");

    var datasetProcess = DatasetFactory.getDataset("workflowProcess",returnFields, constraints, null);/*&&
                        DatasetFactory.getDataset("DSassinatura_mit", returnFields, constraints, null)&&
                        DatasetFactory.getDataset("processAttachment", returnFields, constraints, null);*/

    // for (var i = 0; i < datasetProcess.rowsCount; i++){
    //     dataset.addRow(new Array(datasetProcess.getValue(i, "workflowProcessPK.processInstanceId") /*datasetProcess.getValue(i, "sol_txt_dt"), datasetProcess.getValue(i, "documentId")*/));
    //  }

    return dataset; 

}function onMobileSync(user) {

}