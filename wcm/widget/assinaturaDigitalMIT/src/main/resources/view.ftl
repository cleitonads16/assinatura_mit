<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!-- efetua a tradução do texto do objeto i18n -->	       
    <div class="row">
		<div class="col-md-6">
			<label for="NOME_SOLICITANTE_${instanceId}">${i18n.getTranslation('Responsável Assinatura')}</label>
			<input type="text" class="form-control" name="NOME_SOLICITANTE_${instanceId}" id="NOME_SOLICITANTE_${instanceId}"/>
		</div>
		<div class="col-md-6">
			<label for="numSolic_${instanceId}">${i18n.getTranslation('Nº da Solicitação')}</label>
			<input class="form-control numSolic" name="numSolic_${instanceId}" id="numSolic_${instanceId}" rows="3"/>
		</div>
		<div class="col-md-6">
			<label for="data_${instanceId}">${i18n.getTranslation('Data')}</label>
			<input class="form-control" name="data_${instanceId}" id="data_${instanceId}"/>
		</div>		
		<div class="col-md-6">
			<label for="anexo_${instanceId}">${i18n.getTranslation('Anexo Inserir Assinatura')}</label>
			<input class="form-control" name="anexo_${instanceId}" id="anexo_${instanceId}" />
		</div>
	</div>
	<!--div class="row">
		<div class="col-md-6">
			<label for="ramal_${instanceId}">${i18n.getTranslation('dados.chamado.ramal')}</label>
			<input class="form-control ramais" name="ramal_${instanceId}" id="ramal_${instanceId}" rows="3"></input>
		</div>
		<div class="col-md-6">
			<label for="departamento_${instanceId}">${i18n.getTranslation('dados.chamado.departamento')}</label>
			<input class="form-control" name="departamento_${instanceId}" id="departamento_${instanceId}" rows="3"></input>
		</div>
	</div-->
	<div class="row">		
		<div class="col-md-12">
			<label for="obs__${instanceId}">${i18n.getTranslation('Observações')}</label>
			<textarea class="form-control" name="obs__${instanceId}" id="obs__${instanceId}" rows="3"></textarea>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-md-12">
			<label class="radio-inline"> 
				<input type="radio" name="wid_rd_aprov" id="rdAprovSim_${instanceId}" value="sim"/>${i18n.getTranslation('Aprovado')}
			</label>
			<label class="radio-inline"> 
				<input type="radio" name="wid_rd_aprov" id="rdAprovNao_${instanceId}" value="nao"/>${i18n.getTranslation('Reprovado')}
			</label>	
		</div>									
	</div>	
	<br>
	<!--  <div class="row">
		<div class="col-md-12">
			<button type="buton" class="btn btn-default" data-abrirchamado>${i18n.getTranslation('btn.chamado')}</button>
		</div>
	</div>   -->
	<br>
</div>
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>