
var _doClientInfoSetting;// = function(obj){};
var _doAddGoodFunSetting;
var _purOrderViewRef;
var _changeProductNum;
var _doAddGoodFunError;

function addGood(cid, cnum, ccid, ccnum) {
	 $.ajax({
		  url: '/shopping/addGood',
		  type: 'POST',
		  cache: false,
		  async: false,
		  dataType: 'json',
		  data: {
			  cid: cid,
			  cnum: cnum,
			  ccid: ccid,
			  ccnum: ccnum
		  },
		  success: function(data, status) {
			  if (typeof(_doAddGoodFunSetting) == 'function') {
				  _doAddGoodFunSetting(data);
			  }
			  getInfo();
		  },
		  error: function(data, status, e) {
			  if (typeof(_doAddGoodFunError) == 'function') {
				  _doAddGoodFunError($.parseJSON(data.responseText));
			  }
		  }
	});
}

function removeGood(carType, sid, callback) {
	 $.ajax({
		  url: '/shopping/removeGood',
		  type: 'POST',
		  cache: false,
		  async: false,
		  dataType: 'json',		  
		  data: {'carType': carType, 'sid': sid},
		  success:  function (data, status) {		  
			  getInfo();
			  if (callback) {
				  callback(sid, data);
			  }
		  },
		  error: function(data, status, e) {
			  //alert(e);
			  //alert('Ajax request 發生錯誤');
		  }
		});
}

function chofreight(freightType){
	$.ajax({
		  url: '/shopping/freight',
		  type: 'POST',
		  cache: false,
		  async: false,
		  dataType: 'text',
		  data: {
			  "fid":freightType
		  },
		  success: function(data, status) {getInfo();},
		  error: function(data, status, e) {}
		});
}
function getInfo(){
	 $.ajax({
		  url: '/shopping/getInfo',
		  type: 'POST',
		  cache: false,
		  async: false,
		  dataType: 'json',
		  data: {},
		  success:  function (data, status) {
			  data.totalNum = countTotalNum(data);
			  if(isNaN(data.totalNum))
				  data.totalNum=0;
			  
			  if(typeof(_doClientInfoSetting)=='function'){
				  _doClientInfoSetting(data);
			  }
			  if(typeof(_changeProductNum)=='function') {
				  _changeProductNum(data.totalNum);
			  }
		  },
		  error: function(data, status, e) {
			  alert('Ajax request 發生錯誤');
		  }
		});
}

function countTotalNum(data){
	var totalNum = 0;
	$.each(data['comms'], function(key, item) {
		$.each(item['cnum'], function(k, v) {
			totalNum += v;
		});
	});
	return totalNum;
}

function getAddGoodAlertMsg(){
	
	
} 

function shoppingCarAjaxPage(siteId, carType){
	var url = '/shopping/purView-'+siteId;
	if (carType == 'Coin') {
		url = '/shopping/purCoin-'+siteId;
	}
	 $.ajax({
		  url: url,
		  type: 'POST',
		  cache: false,
		  async: false,
		  dataType: 'text',
		  data: {},
		  success:  function (data, status){
			  if(typeof(_purOrderViewRef)=='function'){
				  _purOrderViewRef(data);
				  getInfo();
			  }
		  },
		  error: function(data, status, e) {}
		});
}

function shopPhoneAjaxPage(siteId){
	 $.ajax({
		  url: '/shopping/purViewPhone-'+siteId,
		  type: 'POST',
		  cache: false,
		  async: false,
		  dataType: 'text',
		  data: {},
		  success:  function (data, status){
			  if(typeof(_purOrderViewRef)=='function'){
				  _purOrderViewRef(data);
				  getInfo();
			  }
		  },
		  error: function(data, status, e) {}
		});
}

$(function() {
	getInfo();
});

_changeProductNum = function(total) {
	var shoppingCar = $('#shoppingCar');
	var spanCar = shoppingCar.find('span');
	if (spanCar.size() == 0) {
		spanCar = $('<span>');
		shoppingCar.append(spanCar);
	}
	spanCar.text('('+total+')');
};