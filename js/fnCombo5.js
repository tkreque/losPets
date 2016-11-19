
function fnCombo5(valueParam){
	
	var combobox = $("#combo5");
	
	alert("Selecionado: " + valueParam);
	
	combobox.hide();
	combobox.empty();
	
	var padrao = "Selecionar por...";
	combobox = $("#combo1");
	combobox.val(padrao);
}