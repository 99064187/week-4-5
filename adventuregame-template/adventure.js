var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameContainer = document.getElementById("game-container");
var description = document.getElementById("description");
var inventoryItem = document.getElementById("inventoryItem");

function setbutton(textButton1, handeler1,textButton2, handeler2,textButton3, handeler3 ){
	if(textButton1 != null){
		button1.style.display = "flex";
		button1.innerHTML = textButton1;
		button1.onclick= handeler1;
	}else{
		button1.style.display = "none";
	}

	if(textButton2 != null){
		button2.style.display = "flex";
		button2.innerHTML = textButton2;
		button2.onclick= handeler2;
	}else{
		button2.style.display = "none";
	}

	if(textButton3 != null){
		button3.style.display = "flex";
		button3.innerHTML = textButton3;
		button3.onclick= handeler3;
	}else{
		button3.style.display = "none";
	}

}
function start(){
	inventoryItem.style.display = "none";
	description.style.display = "none";
	setbutton("start", level1, null, null, null, null);
}

function level1(){
	setbutton("overvalt de bank", level2, "je steelt de auto", level4, "je loopt door", level3 )
	description.style.display = "flex";
}

function level2(){// overval
	setbutton(null, null,"je gaat de kluis in", kluis,null,null );
	gameContainer.style.backgroundImage = "url('img/bank-inside.jpg')";
	description.innerHTML ="je bent rijk !!!!"
}

function kluis(){ //je bent in de kluis
	setbutton( "scheeuwt om hulp",alert1,"opent de deur",alert2,"doet niks", alert3 );
	gameContainer.style.backgroundImage = "url('img/kluis-inside.jpg')";
	description.innerHTML ="oh nee de deur is dicht gevallen je zit vast probeer te ontsnappen";
	inventoryItem.style.display = "flex";
	inventoryItem.onclick= sleutel;
}

function sleutel(){
	alert("goed zo je hebt de sleutel gevonden.");
	inventoryItem.style.display= "none";
	button2.onclick= rijk;
}

// alerts voor de level in de kluis
function alert1(){alert("niemand hoort je hoor");}
function alert2(){alert("die zit natuurlijk dicht");}
function alert3(){alert("ja wachten dan maar");}

function rijk(){//gewonnen 
	setbutton(null,null,null,null,null,null);
	gameContainer.style.backgroundImage = "url('img/duck.gif')";
	title.innerHTML= "nooit meer geldzorgen!!!";
	title.style.color = "white";
	description.innerHTML ="gefeliciteerd nooit meer geldzorgen";
	alert("gewonnne");
}

function level3(){// doorlopen
	setbutton("je mept hem op zn hoofd",overval1,"geeft je geld",overval2,null,null );
	gameContainer.style.backgroundImage = "url('img/overval.jpg')";
	inventoryItem.style.display = "flex";
	document.getElementById("inventoryItem").src = "img/knuppel.jpg";
	var element = document.getElementById("inventoryItem");
	element.id = "knup";
	description.innerHTML ="oh nee je word overvallen en nu ?!!";
	title.innerHTML= "vechten of geld?";
	title.style.color = "white";
	inventoryItem.onclick= overvalknup;
}
function overval1(){
	setbutton("opnieuw?", level3, null,null,null,null);
	gameContainer.style.backgroundImage = "url('img/helaas.jpg')";
	title.innerHTML= "dat pakte niet goed uit";
}
function overval2(){
	setbutton("opnieuw?", level3, null,null,null,null);
	gameContainer.style.backgroundImage = "url('img/blut.jpg')";
	title.innerHTML= "dat was al je geld nu heb je niks meer";
}
function overvalknup(){
	button1.onclick= overvalwin;
	inventoryItem.style.display= "none"; 
}
function overvalwin(){
	setbutton("belt de politie", wanted,"gooit hem weg?",weggegooit,null,null  )
	alert("boven op zn muil");
	gameContainer.style.backgroundImage = "url('img/dief.jpg')";
	description.innerHTML ="je hebt hem en nu ?";
}
function weggegooit(){
	setbutton(null,null,null,null,null,null);
	gameContainer.style.backgroundImage = "url('img/weg.png')";
	description.innerHTML ="goed zo weer een dief minder";
}
function wanted(){
	setbutton(null,null,null,null,null,null);
	gameContainer.style.backgroundImage = "url('img/wanted.jpg')";
	description.innerHTML ="gefeliciteerd de dief was gezocht en je hebt 10.000.000 euro gekregen.";
}

function level4(){// auto stelen
	setbutton("flexen in de stad",stad,"naar huis",huis,"uitlaten op de snelweg",snelweg );
	title.innerHTML= "dikke wagen!";
	gameContainer.style.backgroundImage = "url('img/porsche.jpeg')";
	description.innerHTML ="waar gaan we heen rijden?";
}

function stad(){
	setbutton("vluchten", vluchten, "mee werken", opgepakt, null,null)
	gameContainer.style.backgroundImage = "url('img/politie.jpg')";
	description.innerHTML ="oh nee politie wat gaan we doen?";
}

function vluchten(){
	gameContainer.style.backgroundImage = "url('img/kruispunt.jpg')";
	setbutton("links", opgepakt, "rechtdoor", rechtdoor, "rechts",rechts)
	description.innerHTML ="oh nee de politie komt achter je aan ";
}

function rechtdoor(){
	gameContainer.style.backgroundImage = "url('img/gt3rs.jpg')";
	setbutton(null,null,null,null,null,null);
	description.innerHTML ="je hebt de politie afgeschut gefeliciteerd.";
}
function rechts(){
	gameContainer.style.backgroundImage = "url('img/crash.jpg')";
	setbutton(null,null,"opnieuw",level4,null,null);
	description.innerHTML ="je verloor de macht over het stuur.";

}
function huis(){
	gameContainer.style.backgroundImage = "url('img/garge.jpg')";
	setbutton("verkopen", opgepakt, "houden", houden, "weggooien",weggooien);
	description.innerHTML ="daar staat hij dan veilig in de schuur wat doen we er nu mee?";

}
function houden(){
	gameContainer.style.backgroundImage = "url('img/mini.jpg')";
	setbutton(null,null,null,null,null,null);
	description.innerHTML ="hij is van u";
}
function weggooien(){
	gameContainer.style.backgroundImage = "url('img/porsche-weg.png')";
	setbutton(null,null,null,null,null,null);
	description.innerHTML ="oke als u dat wilt";
}

function snelweg(){
	gameContainer.style.backgroundImage = "url('img/snelweg.gif')";
	setbutton("topspeed", rechts, "rustig", vluchten, "van de snelweg af",null);
	description.innerHTML ="hoe rijden we veder?";
}

function opgepakt(){
	setbutton(null,null,"opnieuw",level4,null,null);
	gameContainer.style.backgroundImage = "url('img/opgepakt.jpg')";
	description.innerHTML ="aangehouden helaas alles kwijt.";
}
	

start();