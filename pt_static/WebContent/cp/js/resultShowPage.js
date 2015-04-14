var resultRates = {"account":2,"name":1.5,"phone":2,"email":4,"sex":1,"score":1,"grade":1,"one_score":1.8,"two_score":1.8};

$(function(){
	var totalResultRate = 0;
	var titleResults = {};
	$(".result_list .title div").each(function(){
		var $this = $(this);
		var thisClass = $this.attr("class");
		if(!titleResults[thisClass]){
			titleResults[thisClass] = [];
		}
		titleResults[thisClass].push({"title" : $this, "result" : $(".result_list .result ." + thisClass)});
		totalResultRate += resultRates[thisClass];
	});
	$.each(titleResults, function(key, value){
		var percentRate = 100 * resultRates[key] / totalResultRate;
		$.each(value, function(v_k, v_v){
			v_v.title.width(percentRate + "%");
			v_v.result.width(percentRate + "%");
		});
	});
	$(".page_main_left").height($(".page_main_right").height());
});