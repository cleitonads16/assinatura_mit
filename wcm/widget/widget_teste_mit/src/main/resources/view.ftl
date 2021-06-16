<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
<form>
<script src="widget_teste_mit.css"></script>
<script src="/webdesk/vcXMLRPC.js"></script>
	<div class="form-group">
	
		<div class="panel panel-default">
			<div class="panel-heading">
				<label for="nomePanel">Dados da MIT</label>
			</div>
			<div class="panel-body">
					
				<div class="row">
					<div class="col-md-4">
						<label class="control-label">Número da Solicitação</label>
						<input id="filter-example-dataset" type="text" name="filter-example-dataset"/>
					</div>
					<div class="col-md-4">
						<label class="control-label">Nome do Processo</label>
						<input id="wid_txt_nomeProcess" type="text" name="wid_txt_nomeProcess" class="form-control"/>
					</div>
					<div class="col-md-4">
						<label class="control-label">Documento Anexo</label>
						<input id="wid_txt_docAnexo" type="text" name="wid_txt_docAnexo" class="form-control"/>
					</div>
				</div>		
			</div>
		</div>
							
			<div class="div_margin">
				<div class="row">
					<label class="col-md-12 control-label" style="margin-bottom: 10px;">Aprovado?</label>
					<div class="div_aprov">
						<label class="radio-inline"> 
							<input type="radio" name="wid_rd_aprov" id="wid_rd_aprovSim" value="sim">Sim
						</label>
						<label class="radio-inline"> 
							<input type="radio" name="wid_rd_aprov" id="wid_rd_aprovNao" value="nao">Não
						</label>
					</div>
				</div>
			</div>
			
		</div>
	</div>	
</form>


