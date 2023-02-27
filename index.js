var randNumber=Math.floor(Math.random()*2)+1;
var toss= document.getElementsByClassName("img1")[0].setAttribute("src","toss"+randNumber+".jpg");
if(randNumber==1){
  document.querySelector("h1").innerHTML="Heads";
}
else{
  document.querySelector("h1").innerHTML="Tails";

}
