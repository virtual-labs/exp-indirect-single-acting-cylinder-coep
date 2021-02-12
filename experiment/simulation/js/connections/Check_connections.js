checkSymIdentifications = function(selectedOp, component, actuator, jsonarray) {

	var temp = JSON.parse(jsonarray);

	var connData = {};

	if (temp.length != 0) {

		if (selectedOp == "1") {
			Identify_Direct_SAC_Symbol(selectedOp, component, actuator, jsonarray);
		}else if(selectedOp == "2"){
			Identify_Indirect_SAC_Symbol(selectedOp, component, actuator, jsonarray);
		}

		connData.selectedOp = selectedOp;
		connData.component = component;
		connData.actuator = actuator;
		connData.connDiagjson = jsonarray;
		connData.chkIdenCnt = IdenFlagCnt;
		connData.chkIdenConn = rightIden;
//		connData.multiSelFlagCnt = multiSelectFlagCnt;
//				    console.log(connData);
//		ExpTrackData.connData = connData
//					console.log(ExpTrackData);

	} else {
		alertify.alert("Please select right symbol to identify");
	}
}

checkConnections = function(selectedOp, component, actuator, jsonarray) {

	var temp = JSON.parse(jsonarray);

	var connData = {};

	if (temp.length != 0) {

		if (selectedOp == "1") {
			direct_SAC_Connections(selectedOp, component, actuator, jsonarray);
		}else if(selectedOp == "2"){
			inDirect_SAC_Connections(selectedOp, component, actuator, jsonarray);
		}
			

		connData.selectedOp = selectedOp;
		connData.component = component;
		connData.actuator = actuator;
		connData.connDiagjson = jsonarray;
		connData.chkConnCnt = ConnFlagCnt;
		connData.chkRightConn = rightConn;
//				    console.log(connData);
//		ExpTrackData.connData = connData
//					console.log(ExpTrackData);

	} else {
		alertify.alert("Please select right symbol to identify");
	}
}
