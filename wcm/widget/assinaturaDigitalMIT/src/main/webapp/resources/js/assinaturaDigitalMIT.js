var HelloWorld = SuperWidget.extend({

    //variáveis da widget
    idForm: 0,

    init: function () {
        console.log("===================FUNÇÃO INIT======================");
        var that = this;

        this.buscaIDForm("DSassinatura_mit", function(idForm){
            that.idForm = idForm;
            console.log("idForm", idForm);
        });

    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },


    buscaIDForm: function (dataset, callback) {
        $.ajax({
            async: true,
            type: "GET",
            url: "/ecm/api/rest/ecm/dataset/customlist/icg?offset=0&limit=1&orderby=&pattern=" + dataset,
            success : function(data) {
                callback(data.content[0].datasetImpl);
            },
            error: function (msg){
                console.error("ERROR - BUSCA ID do FORM", msg);
                alert("Erro ao buscar o ID do Form!");
            }
        });
    } // buscaIDForm

    
});