var diff = localStorage.getItem("diff");
window.addEventListener("load",()=>{
	
	console.log(diff)
	if(diff!=8){
		setTimeout(()=>{
			document.getElementById("higher").style.opacity = 1;

		},3000)
		setTimeout(()=>{
			document.getElementById("opt").style.opacity = 1;
		
		},4000)
			
	}
	else{
		var final_score = document.getElementById("final_score");
		var final_time = document.getElementById("time");
		var final_rank = document.getElementById("title");
		final_score.innerHTML = localStorage.getItem("user-score");
		final_time.innerHTML = localStorage.getItem("start-time");
		var getRating = parseInt(localStorage.getItem('stars'));
		final_rank.innerHTML = getRating == 1 ? "Mouse Catcher":getRating == 2?"Mouse Hunter":getRating == 3?"Mouse Killer":getRating == 4?"Mouse Predator":getRatin == 5?"Mouse Slayer":undefined
		
	}
	document.getElementById("replay").addEventListener("submit",()=>{
	    
		if(diff==5){
		   	localStorage.setItem("diff",6);
		localStorage.setItem("timelimit",40);
		localStorage.setItem('diff_code',"Supper-Worthy");
		}
		if(diff==6){
		   localStorage.setItem("diff",8);
		localStorage.setItem("timelimit",30);
		localStorage.setItem('diff_code',"Feast-Worthy");
		}
	})

});
