var HelloWorld = SuperWidget.extend({

    init: function () {
    	
    	console.log("==================VERSÃO ATUAL===================");
    	
        var users = this.getDatasetUsers();
        var settingsExampleDataset = {
            source: users,
            displayKey: 'numero_processo',
            multiSelect: false,
            style: {
                autocompleteTagClass: 'tag-gray',
                tableSelectedLineClass: 'info'
            },
            table: {
                header: [{
                    'title': 'Número da Solicitação',
                    'size': 'col-xs-9',
                    'dataorder': 'numero_processo',
                    'standard': true
                },{
                    'title': 'Data da Solicitação',
                    'size': 'col-xs-9',
                    'dataorder': 'sol_txt_dt',
                    'standard': true,
                    'display': false
                },{
                    'title': 'Nome do Responsável pela Assinatura',
                    'size': 'col-xs-9',
                    'dataorder': 'sol_txt_dt',
                    'standard': true,
                    'display': false
                }],
                renderContent: ['numero_processo',"sol_txt_dt","sol_txt_nomeResAss"],
            }
        };

        var filter = FLUIGC.filter('#numSolic_'+this.instanceId, settingsExampleDataset);
                    
         
    },

    getDatasetUsers: function() {
 
        try {
                // Busca o dataset de usuários
                var dataset = DatasetFactory.getDataset('DSassinatura_mit');
                var users = dataset.values;
                return users;
        } catch(error) {
                console.error(error);
                return [];
        }
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },


    buscaIDForm: function (dataset, callback) {
        
    } // buscaIDForm

    
});