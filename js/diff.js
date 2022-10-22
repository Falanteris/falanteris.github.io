window.addEventListener("load",()=>{
	var ez = document.getElementById("easy");
	var med = document.getElementById("medium");
	var hard = document.getElementById("hard");
	ez.addEventListener("click",()=>{
    	localStorage.setItem("timelimit",undefined);
		localStorage.setItem("diff",5);
		localStorage.setItem('diff_code',"Easy-Catch")
		window.location="CatAndMouse.html";

	})
	med.addEventListener("click",()=>{
		localStorage.setItem("diff",6);
		localStorage.setItem("timelimit",40);
		localStorage.setItem('diff_code',"Supper-Worthy");
		window.location="CatAndMouse.html";
	})

	hard.addEventListener("click",()=>{
		localStorage.setItem("diff",8);
		localStorage.setItem("timelimit",30);
		localStorage.setItem('diff_code',"Feast-Worthy");
		window.location="CatAndMouse.html";
	})
})