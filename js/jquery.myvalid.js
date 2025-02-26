function afv_empty(fld, msg,dv) {
	var message = (typeof msg !== "undefined")? msg :fld.attr('msg')+'必填，請檢查';
	var v = fld.val();
	if(v!==''){
		return true
	} else{
		alert(message);
		fld.focus();
		return false;
	}
}

function afv_regex(fld,pattern,msg){
	var message = (typeof msg !== "undefined")? msg :fld.attr('msg')+'必填，請檢查';
	var v = fld.val();
	var ret = v!=='' && pattern.test(v) ;
	if(!ret){
		alert(msg);
		fld.focus();
	}
	return ret ;
}