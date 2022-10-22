window.addEventListener('load',() => {
	document.getElementById("score").innerHTML = localStorage.getItem("user-score") == undefined ? 0 : localStorage.getItem("user-score") ;
	document.getElementById("score_input").value = localStorage.getItem("user-score") == undefined ? 0 : localStorage.getItem("user-score") ;
console.log(localStorage.getItem("user-score"));
});
document.addEventListener("submit",(e) =>{

	var newf = document.createElement("form");
	var score = document.createElement("input");
	var name = document.createElement("input");
	var getUser = "";
	document.getElementById("name").forEach((item) => {
		console.log(item);
	});
	var info = {
		score:document.getElementById("score").innerHTML,
		user:getUser
	}
	score.value = info.score;
	name.value = info.user;
	alert(score.value + " " + name.value)
	newf.appendChild(score)
	newf.appendChild(name)
	newf.method="GET";

	newf.submit();
	
})
function alterUserName(){
	var namepart = document.getElementsByClassName("namepart");
	var getName = document.getElementById("username");
	var  finalName = "";
	var namepart = 3;
	for(var ind = 1;ind<=namepart;ind++){
		finalName += document.getElementById(ind).innerHTML;
	}
	console.log(finalName);
	getName.value = finalName;
}
document.addEventListener("keyup",(e)=>{
	localStorage.getItem("user-score");
	var getINP = e.key
	var Alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","Enter"]
	var validated = false;
	console.log(getINP)
	Alpha.forEach((alpha) => {
		if(getINP == alpha){
			validated = true;
		}
	})	
	if(validated == false){
		console.log("NOT VALID")
		return;
	}
	if(getINP != "Enter"){
	var getHighlight = document.getElementsByClassName("animate_namepart")[0];
	getHighlight.innerHTML = e.key.toUpperCase();
	alterUserName();
	return;
	}
	
		alert("Score Submitted..");
	

})
	HTMLCollection.prototype.extractByClassName = function(name) {
		// body...
		let select
		console.log(this.length)
		for (var i = this.length - 1; i >= 0; i--) {
   			if(this.item(i).classList.contains(name)){
   				select = this.item(i);
   			}
   		}
   		return select
	};
	HTMLCollection.prototype.extractById = function(name) {
		// body...
		let select
		console.log(this.length)
		for (var i = this.length - 1; i >= 0; i--) {
   			if(this.item(i).id == name){
   				select = this.item(i);
   			}
   		}
   		return select
	};
	
   	function selectNp(){
   		var nameparts = document.getElementsByClassName("namepart")
   		let selectNamepart;
		 selectNamepart = nameparts.extractByClassName("animate_namepart")
   		console.log(selectNamepart)

	
	
	return selectNamepart
   	}
   	function alterNp(newID){
   		var getHighlight = document.getElementsByClassName("animate_namepart").item(0)
   		getHighlight.classList.remove("animate_namepart");
   		var getAll = document.getElementsByClassName("namepart");
   		console.log(newID)
   		getAll.extractById(newID).classList.add("animate_namepart");

   	}	

    window.addEventListener("click",(e) =>{
    	var NP = selectNp();
    	var target = e.target || e.SrcElement;
    	console.log(target.id);

    	if(NP.id == 1 &&  target.id == "Left" || NP.id == 3 &&  target.id == "Right" ){
    		console.log(new Error("INvalid move"));
    		return 
    	}
    	if(target.id == "Right"){
    		alterNp(parseInt(NP.id) + 1)
    	}
    	else if(target.id == "Left"){
    		alterNp(parseInt(NP.id) - 1)	
    	}
    	
    })
	