var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    
    init: function() {
    	
    	console.log("Entrei na Função Filter");
    	var users = this.getDatasetUsers();    
    	 
        var settingsExampleDataset = {
            source: users,
            displayKey: 'workflowProcessPK.processInstanceId',
            multiSelect: false,
            /*style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },*/
            table: {
                header: [{
                    'title': 'Nº Solicitação',
                    'size': 'col-xs-9',
                    'dataorder': 'Nº Solicitação',
                    'standard':true
                    
                }],
                
                renderContent: ['workflowProcessPK.processInstanceId']
            }
        };
                
        
        var filter = FLUIGC.filter('#filter-example-dataset', settingsExampleDataset);                
    	console.log("VAR FILTER---------------"+filter);
    },
    
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
  
        },
        global: {}
        
    },
 
    executeAction: function(htmlElement, event) {
    	
    	
    },
    
    getDatasetUsers: function() {
     	 
        try {
                // Busca o dataset de usuários
                var dataset = DatasetFactory.getDataset('workflowProcess');
                var users = dataset.values;           
                return users;
        } catch(error) {
                console.error(error);
                return [];
        }
    },
    
   

});

