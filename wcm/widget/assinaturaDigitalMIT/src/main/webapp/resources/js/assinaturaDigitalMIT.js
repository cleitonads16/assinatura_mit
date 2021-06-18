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

        var dataset = DatasetFactory.getDataset('DSassinatura_mit');
        for(var i=0; i<dataset.values.length; i++){
            var c1 =  dataset.values[i]["numero_processo"]; 
            var c2 =  dataset.values[i]["sol_txt_nomeResAss"]; 
            var c3 =  dataset.values[i]["sol_txt_dt"];  
            
            console.log("Campo 1 = " + i,c1); 
            console.log("Campo 2 = " + i,c2);
            console.log("Campo 3 = " + i,c3); 
         
            // Faça o que quiser com os campos aqui e cada linha do dataset
         }

        
        var filter = FLUIGC.filter('#numSolic_'+this.instanceId, settingsExampleDataset);
        // filter = $('#respNome_'+this.instanceId).val(c2);

    },

    getDatasetUsers: function() {
 
        try {
                // Busca o dataset de usuários
                var dataset = DatasetFactory.getDataset('DSassinatura_mit');
                var users = dataset.values;

                for(var i=0; i<dataset.values.length; i++){
                    var campo1 =  dataset.values[i]["numero_processo"]; 
                    var campo2 =  dataset.values[i]["sol_txt_nomeResAss"]; 
                    var campo3 =  dataset.values[i]["sol_txt_dt"];  
                    
                    // console.log("Campo 1 = " + campo1); 
                    // console.log("Campo 2 = " + campo2);
                    // console.log("Campo 3 = " + campo3); 
                 
                    // Faça o que quiser com os campos aqui e cada linha do dataset
                 }

                // $('#numSolic_'+this.instanceId).val(campo1);
                // $('#respNome_'+this.instanceId).val(campo2);
                // $('#data_'+this.instanceId).val(campo3);

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