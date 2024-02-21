console.log("from script file");
var ans="";
var a;
var cmt="";
function ass(a){
    ans=""+ ans+a;
    console.log(ans);
    document.getElementById("scr").innerHTML= ans;
    // return a;
}
function clr(){
    ans="";
    document.getElementById("scr").innerHTML= ans;
}
function show(){
console.log(ans.length);

ans.length<4?cmt="TRUST YOURSELF":cmt="I'm not sure though" ;
ans=eval(ans);

document.getElementById("scr").innerHTML= '<p class="res" >'+ans+'</p>'+'<p class="res">'+cmt+ '</p>';
  

}


function del(){
    ans = ans.slice(0,-1);
    document.getElementById("scr").innerHTML= ans;

}