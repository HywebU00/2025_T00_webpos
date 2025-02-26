jQuery(function ($) {
    $.datepicker.regional['zh-TW'] = {
        closeText: '關閉',
        prevText: '&#x3C;上月',
        nextText: '下月&#x3E;',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: 'yy/mm/dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        isTWYear: false,
        showTwYear: function(y,istw){return istw?('民國'+(y-1911)+'年'):y;},
        onSelect: function(dateText,inst) {
        	    	dateText = dateText.replace(/\//ig,'')
        	    	dateText = (parseInt(dateText,10)-19110000).toString();
        	    	var len = dateText.length;
        	    	if($("#"+inst.id+"_showTWDatePickerText"))
        	    		$("#"+inst.id+"_showTWDatePickerText").val(dateText.substring(0,dateText.length-4)+"/"+dateText.substring(dateText.length-4,dateText.length-2)+"/"+dateText.substring(dateText.length-2,dateText.length));
             	  },
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['zh-TW']);
});