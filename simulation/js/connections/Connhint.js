IdenHint = function(selectedOp) {

	if (selectedOp == "1") {
		$("#Dir_sac_iden").css("display", "block");
		$("#Dir_SAC").css("display", "none");
	}else if(selectedOp == "2"){
		$("#Indir_sac_iden").css("display", "block");
		$("#Indir_SAC").css("display", "none");
	}
}

ConnHint = function(selectedOp){
	if (selectedOp == "1") {
		$("#Dir_SAC").css("display", "block");
		$("#Dir_sac_iden").css("display", "none");
	}else if(selectedOp == "2"){
		$("#Indir_SAC").css("display", "block");
		$("#Indir_sac_iden").css("display", "none");
	}
}