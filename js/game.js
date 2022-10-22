var time_limit = localStorage.getItem("timelimit") != undefined?localStorage.getItem("timelimit"):undefined;

function loadLoseScreen(){
	
					var vic = document.getElementsByClassName('victory_scr')[1];
						var times = document.getElementById('time');
					
					var time = parseInt(times.innerHTML);
					times.classList.add("diss");

					vic.classList.add("appear");
					var label = document.createElement("label");
					
}
function move_dynamic(){

			var all_mouse = $(".sample");

		
		
		
	for(var i = 0;i<all_mouse.length;i++){
			var moveTowidth = Math.floor((Math.random() * window.innerWidth/2) + 1) ;
		var moveToheight = Math.floor((Math.random() * window.innerHeight/2) + 1);
		
		wdt = moveTowidth + "px";
		ht = moveToheight + "px";
		tran = "translate("+wdt+","+ht+")";
			$(all_mouse[i]).css({
			"transform":tran,
			"transition":"2s ease-in-out"
		});	
			$(all_mouse[i]).click(function(e){
			
				e.currentTarget.classList.add("hitted");
                document.getElementById("blast_sfx").play();
				$("#"+e.currentTarget.id).css({
					"opacity":0
				}).prop("onclick",null);
				//see if all samples are hidden
				
				localStorage.setItem("hitted",document.getElementsByClassName("hitted").length)
				var samples = $(".sample");
				var clear = 1;
			
				for (var j = samples.length - 1; j >= 0; j-=1) {
				
				
				
					
					if(parseInt(localStorage.getItem("hitted")) == limit){
					
						break;
					}
					if(samples[j].style.opacity!=0||
						samples[j].style.opacity==""
					 ){
					
						clear = 0;
						break;
					}

				}
				if(clear == 1){
					clearInterval(timing);
					clearInterval(dyn);
					document.getElementById('game_track').pause();

					document.getElementById('game_win').play();
					var vic = document.getElementsByClassName('victory_scr')[0];
						var times = document.getElementById('time');
					
					var time = parseInt(times.innerHTML);
					times.classList.add("diss");

					vic.classList.add("appear");
					var label = document.createElement("label");
					

					


				}
				
			});

	}
	}

	function add_time(){
		if(!localStorage.getItem("start_time")){
			localStorage.setItem("start_time",1);
		}
		else{

			var st = localStorage.getItem("start_time");
			
		  	st = parseInt(st);
		  	if(time_limit!=undefined){
				if(st==time_limit-1){
					clearInterval(dyn);
					clearInterval(timing);
					loadLoseScreen();
				}
			}
			localStorage.setItem("start_time",st+1);	
		}
		var start = localStorage.getItem("start_time");
		document.getElementById("time").innerHTML = start; 
		var score =  1000-start*10+limit*5
		document.getElementById("score").innerHTML = score;
		var rating = document.getElementById("rating");
		var diff =document.getElementById("diff");
		localStorage.setItem("user-score",score);
		localStorage.setItem("user-played",true);

		var full_rate = 5; 
		for(var i = start;i>15;i-=15){
			full_rate -=1
		}
		rating.innerHTML = full_rate + " stars";
		localStorage.setItem("stars",full_rate);
		diff.innerHTML = localStorage.getItem("diff_code");
		
		
			
		
		
	}
	var timing = setInterval(add_time,1000);
	var dyn = setInterval(move_dynamic,2000);	
	
	function moveObject(object){
		object  = document.getElementById(object);
		
		var moveTowidth = Math.floor((Math.random() * window.innerWidth) + 1) ;
		var moveToheight = Math.floor((Math.random() * window.innerHeight) + 1);
		
		wdt = moveTowidth + "px";
		ht = moveToheight + "px";
		tran = "translate("+wdt+","+ht+")";
	
		
		$("#"+object.id).css({
			"transform":tran,
			"transition":"1s linear"
		});


		var mouse_left = $("#"+object.id).css("top");
		var mouse_top = $("#"+object.id).css("left");
		

	}

	function detectOverflow(){
		var mouse_check = document.getElementsByClassName('sample');
		var under = 0;
		var right = 0;
		var above = 0;

		var hiding_mouse = "";
		for (var i = 0; i < mouse_check.length; i++) {
			var positions = mouse_check[i].getBoundingClientRect();
			if(positions.top > window.innerHeight){
				under+=1;
				hiding_mouse += mouse_check[i].id;
				if(under>3){
				  var elem = document.getElementById("darr")
				  elem.classList.add("warning")
				  if(elem.classList.contains("highlighted")){
			  		elem.classList.remove("highlighted")
			 	 }
				}
				else{
					var elem = document.getElementById("darr")
				  elem.classList.add("highlighted")	
				  if(elem.classList.contains("warning")){
			  		elem.classList.remove("warning")
			 	 }
				}
			}
			
			if(positions.right > window.innerWidth){
				right+=1;
				hiding_mouse += mouse_check[i].id;
				if(under>3){
				  var elem = document.getElementById("rarr")
				  elem.classList.add("warning")
				  if(elem.classList.contains("highlighted")){
			  		elem.classList.remove("highlighted")
			 	 	}
				}
				else{
					var elem = document.getElementById("rarr")
				  elem.classList.add("highlighted")	
				  if(elem.classList.contains("warning")){
			  		elem.classList.remove("warning")
			 	 	}
				}
			}
			if(positions.top < 0){
				above+=1;
				hiding_mouse += mouse_check[i].id;
				if(under>3){
				  var elem = document.getElementById("uarr")
				  elem.classList.add("warning")
				  if(elem.classList.contains("highlighted")){
			  		elem.classList.remove("highlighted")
			 	 	}
				}
				else{
					var elem = document.getElementById("uarr")
				  elem.classList.add("highlighted")	
				   if(elem.classList.contains("warning")){
			  		elem.classList.remove("warning")
			 	 }
				}
			}
			
			
				
		}
		if(under==0){
			  var elem = document.getElementById("darr")
			  if(elem.classList.contains("highlighted")){
			  	elem.classList.remove("highlighted")
			  }
			  if(elem.classList.contains("warning")){
			  	elem.classList.remove("warning")
			  }
		}
		if(right == 0){
			
			  var elem = document.getElementById("rarr")
			  if(elem.classList.contains("highlighted")){
			  	elem.classList.remove("highlighted")
			  }
			  if(elem.classList.contains("warning")){
			  	elem.classList.remove("warning")
			  }
		}
		if(above == 0){
			
			  var elem = document.getElementById("uarr")
			  if(elem.classList.contains("highlighted")){
			  	elem.classList.remove("highlighted")
			  }
			  if(elem.classList.contains("warning")){
			  	elem.classList.remove("warning")
			  }	
		}
	}
localStorage.setItem("spamclick",0);
var eventTimer = (event,interval=1000,callback,intervalAction) =>{
    
    var eventInterval = ()=>{
        intervalAction();
    }
    setInterval(eventInterval,interval);
   
    $("body")[event]((e) =>{
        callback(e);
    })
    
}

function addBar(){
  
            
            var item = parseInt(localStorage.getItem("spamclick"));
            localStorage.setItem("spamclick",item+1);
            
            var getBar =$("#fbar") 
            var curr = parseInt(getBar.attr("width"));
            var now =curr+=50%500;
            if(curr>80){
                $("#dpfbar").css("fill","yellow");
                
                if(curr>100){
                    $("#dpfbar").css("fill","red");
                }
                if(curr>=150){
                     $("#dpfbar").css("fill","rgb(153, 0, 0)");  
                }
            }
            $("#fbar").attr("width",now);
            
            
}
function reset(){

            localStorage.setItem("spamclick",0);
         
            
        
}
function fatigue(){
                var getBar =$("#fbar") 
                var curr = parseInt(getBar.attr("width"));
                if(curr<=50){
                    $("#dpfbar").css("fill","white");
                   var banned = localStorage.getItem("banned");
                
                   if(banned=="true"){
                
                       
                        eventTimer("click",1000,addBar,reset);
                        localStorage.setItem("banned",false);
                   }
                    return;
                 
                }
                  
                if(curr>=150){
                   
                    localStorage.setItem("banned",true);
                    
                    $("body").unbind("click");
                    
                   
                }
                
                $("#fbar").attr("width",curr-=1);    
                
            }
let limit
 localStorage.setItem("banned",false);
window.addEventListener("load",function(){
        setInterval(fatigue,50);
        eventTimer("click",1000,addBar,reset);
		if(localStorage.getItem("hitted")!=undefined){
			localStorage.removeItem("hitted");
		}
		var mouse= document.getElementsByClassName("sample");
		limit = isNaN(parseInt(localStorage.getItem("diff")))?5:parseInt(localStorage.getItem("diff")) ;
		var idx  = 0;

		if(limit>=6){
			document.getElementById("medium").style.display="inline";
			if(limit==8){
				document.getElementById("hard").style.display="inline";	
			}
		}
		for(m in mouse){
		if(idx == limit-1){
			
			break;
		}
		try{
		m.addEventListener("click",	function (e){
		var body = document.getElementsByTagName('body');
		var this_el = e.target || e.SrCElement;
		body.removeChild(this_el);
		});
		}catch{
		    
		}
		idx+=1;
		}

	});
