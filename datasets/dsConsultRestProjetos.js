function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
       
    //Cria as colunas
    dataset.addColumn("cdClient");
    dataset.addColumn("lj");
    dataset.addColumn("cdProjeto");
    dataset.addColumn("descProjeto");
    
      
    //Cria os registros
    dataset.addRow(new Array(000001, 01, "TOTVS01", "DESENVOLVIMENTO FLUIG PROCESSOS JAVASCRIPT"));
    dataset.addRow(new Array(000002, 02, "TOTVS02", "ANÁLISE E DESEENVOLVIVENTO DE SISTEMAS"));
    dataset.addRow(new Array(000003, 03, "TOTVS03", "IMPLANTAÇÃO DE SOFTWARE"));
    dataset.addRow(new Array(000004, 04, "TOTVS04", "SUPORTE TÉCNICO EM SISTEMAS"));
    dataset.addRow(new Array(000005, 05, "TOTVS05", "LEVANTAMENTO E DESENVOLVIMENTO DE SISTEMAS"));
     
    return dataset;

}function onMobileSync(user) {

}