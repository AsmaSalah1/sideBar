document.querySelector(".btn").onclick=function(){
    console.log("fgb");
    
document.querySelector(".slide").classList.remove("disabled");
document.querySelector("body").classList.add("overlar");

}
document.querySelector(".slide button").onclick=function(){
    console.log("fgb");
document.querySelector(".slide").classList.toggle("disabled");
document.querySelector("body").classList.remove("overlar");

}