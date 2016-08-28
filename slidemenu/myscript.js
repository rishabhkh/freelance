change = true;
$(document).ready(function(){
	var widgetWrapper = $("#widget_wrapper");	
	var menuButton = $("#menu_button");
	var dropDownWrapper = $("#drop_down_wrapper");
	var dropDownList = $("#drop_down_list");
	var dropDownListOption = $("#drop_down_list option");	
	
	dropDownList.height(widgetWrapper.height());
	dropDownListOption.height(widgetWrapper.height());

	dropDownList.change(function(){		
		dropDownList.width(0);
		dropDownList.find(":selected").siblings().show();
		dropDownList.find(":selected").hide();
	});

dropDownList.click(function(){
	if(change){
		change = false;
	}
	else {
		dropDownList.width(0);
		change = true;
	}		
});

widgetWrapper.hover(function(){		
	dropDownList.width(175);	
});

widgetWrapper.mouseleave(function(){

	if(change){
		dropDownList.width(0);
	}				
});
menuButton.click(function(){
	changeColorRandom(menuButton,dropDownList);
});

});

function changeColorRandom(menuButton,dropDownList){	
	var r = Math.round(Math.random() * (255-0) + 0);
	var g = Math.round(Math.random() * (255-0) + 0);
	var b = Math.round(Math.random() * (255-0) + 0);
	var rl = Math.round(r+((255-r)*.25));
	var gl = Math.round(g+((255-g)*.25));
	var bl = Math.round(b+((255-b)*.25));

	var menuValue = "rgb("+r+","+g+","+b+")";	
	var listValue = "rgb("+rl+","+gl+","+bl+")";
	
	menuButton.css("background-color",menuValue);
	dropDownList.css("background-color",listValue);
}