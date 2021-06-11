function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
       
    //Cria as colunas
    dataset.addColumn("Codigo");
    dataset.addColumn("Loja");
    dataset.addColumn("Nome");
    dataset.addColumn("Nome_reduz");
    
      
    //Cria os registros
    dataset.addRow(new Array(000000, "AMERICANAS", "LOJA AMERICANA", "LJAMERICA"));
    dataset.addRow(new Array(000023, "RENNER", "LOJA RENNER", "LJRENNER"));
    dataset.addRow(new Array(003200, "RIACHUELO", "LOJA RIACHUELO", "LJRIACHUELO"));
    dataset.addRow(new Array(980000, "C&A", "LOJA C&A", "LJC&A"));
    dataset.addRow(new Array(046000, "CENTAURO", "LOJA CEUNTAURO", "LJCENTAURO"));
     
    return dataset;

}function onMobileSync(user) {

}