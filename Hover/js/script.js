var sign = "FIND THE HIDDEN INCANTATION AND PLAY WITH IT";

$("p").mouseover(function(){
	$(this)
	.append(sign)
	.addClass("black");
})
	.mouseout(function(){
	$(this)
	.empty()
	.removeClass("black");
})

$(document).mousemove(function(e){
	var X = e.pageX;
	var Y = e.pageY;
	$(".torch")
	.css("background", "radial-gradient(circle at "+X+"px "+Y+"px, transparent, #000 60%)")
})


//class(charm) isolated to the document background image
//this is to give hint where the "real charm" is hidden -> horror movie: typical cliche


$(".charm").mouseenter(function(){
	$(this)
	.addClass("changecharm");
})
	.mouseleave(function(){
	$(this)
	.removeClass("changecharm");
})
	.click(function(){
	$(this)
	.addClass("changecharm");

})
	$(".charm").dblclick(function(){
	$(this)
	.addClass("ghost");
})

//tried to add audio of screaming when dblclicking the class"ghost" appeared by double-clicking





