open=true;//Stores current state of filter(open or close).
border_style="";//Stores border style to reapply.

$(document).ready(function(){
  
  hideAll();//Hide list elements by default
  var api = $('.scroll-pane').jScrollPane({}).data('jsp');//Custom scroll bar.

  $(".parent").click(function(){
    $(this).siblings().toggle();// Hide/Show siblings of the clicked element.
    api.reinitialise();
  });

  $("#filter_heading").click(function(){
    $("#families_container_outer").toggle();// Hide/Show the filter.
    switchColor();//Switches color based on current state(open or close).
  });

});

function hideAll(){
  //Hides All elements by default.
  $("#families_container").find("ul").hide();
  $(".first").show();
}

function switchColor(){
  if(open){      
    $("#filter_heading").css("background-color","grey");
    $("#filter_container").css("background-color","grey");
    border_style = $("#filter_container").css("border");
    $("#filter_container").css("border","none");          
    open=false;      
  } 
  else{      
    $("#filter_heading").css("background-color","white");
    $("#filter_container").css("background-color","white");
    $("#filter_container").css("border",border_style);     
    open=true;
  }
}