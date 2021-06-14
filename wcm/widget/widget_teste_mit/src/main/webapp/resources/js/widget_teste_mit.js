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
            displayKey: 'colleagueName',
            multiSelect: true,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [{
                    'title': 'colleagueName',
                    'size': 'col-xs-9',
                    'dataorder': 'colleagueName',
                    'standard': true
                }],
                renderContent: ['colleagueName']
            }
        };
     
        var filter = FLUIGC.filter('#filter-example-dataset', settingsExampleDataset);
    	
    },
    
    getDatasetUsers: function() {
    	 
        try {
                // Busca o dataset de usuários
                var dataset = DatasetFactory.getDataset('colleague');
                var users = dataset.values;
                return users;
        } catch(error) {
                console.error(error);
                return [];
        }
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
  
        },
        global: {}
        
    },
 
    executeAction: function(htmlElement, event) {
    	
    	
    }
    
   

});

